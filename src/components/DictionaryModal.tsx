import React, { useState, useEffect } from 'react';

interface DictionaryModalProps {
  word: string;
  onClose: () => void;
}

interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface Phonetic {
  text?: string;
  audio?: string;
}

interface DictionaryEntry {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
}

export const DictionaryModal: React.FC<DictionaryModalProps> = ({ word, onClose }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [entries, setEntries] = useState<DictionaryEntry[]>([]);

  useEffect(() => {
    if (!word) return;

    setLoading(true);
    setError(null);
    setEntries([]);

    // Clean word for API lookup (keep letters only, lowercase, trim)
    const cleanWord = word.toLowerCase().trim().replace(/[^a-z-]/g, '');

    if (!cleanWord) {
      setError('올바른 영단어가 아닙니다.');
      setLoading(false);
      return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('단어 뜻을 찾을 수 없습니다.');
        }
        return res.json();
      })
      .then((data) => {
        setEntries(data as DictionaryEntry[]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || '데이터를 불러오는 중 오류가 발생했습니다.');
        setLoading(false);
      });
  }, [word]);

  const handlePlayAudio = (audioUrl?: string) => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audio.play().catch((err) => console.error('Audio play error:', err));
  };

  // Find phonetic text and audio url from all entries
  const findAudioAndPhonetic = () => {
    let audioUrl = '';
    let phoneticText = '';

    for (const entry of entries) {
      if (entry.phonetic && !phoneticText) phoneticText = entry.phonetic;
      for (const ph of entry.phonetics) {
        if (ph.text && !phoneticText) phoneticText = ph.text;
        if (ph.audio && ph.audio.startsWith('http') && !audioUrl) {
          audioUrl = ph.audio;
        }
      }
    }
    return { audioUrl, phoneticText };
  };

  const { audioUrl, phoneticText } = findAudioAndPhonetic();

  const naverDictUrl = `https://en.dict.naver.com/#/search?query=${encodeURIComponent(word)}`;
  const googleTranslateUrl = `https://translate.google.com/?sl=en&tl=ko&text=${encodeURIComponent(word)}&op=translate`;

  return (
    <div className="dict-overlay" onClick={onClose}>
      <div className="dict-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="dict-header">
          <div className="dict-title-row">
            <span className="dict-word">{word}</span>
            {phoneticText && <span className="dict-phonetic">{phoneticText}</span>}
            {audioUrl && (
              <button
                type="button"
                className="dict-audio-btn"
                onClick={() => handlePlayAudio(audioUrl)}
                title="Listen Pronunciation"
              >
                🔊
              </button>
            )}
          </div>
          <button type="button" className="dict-close" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Content Body */}
        <div className="dict-body">
          {loading && (
            <div style={{ textAlign: 'center', padding: '24px 0', color: 'var(--text-sub)' }}>
              검색 중...
            </div>
          )}

          {error && (
            <div style={{ padding: '12px', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-sub)', fontWeight: '500', marginBottom: '16px' }}>
                💡 사전 API에 등록되지 않은 단어이거나 일시적인 연결 문제로 검색할 수 없습니다. 아래 검색 버튼을 눌러 네이버 사전에서 찾아보세요!
              </p>
            </div>
          )}

          {!loading && !error && entries.length > 0 && (
            <div>
              {entries.map((entry, entryIdx) => (
                <div key={entryIdx} style={{ marginBottom: entryIdx < entries.length - 1 ? '20px' : 0 }}>
                  {entry.meanings.map((meaning, meanIdx) => (
                    <div key={meanIdx} className="dict-meaning-group">
                      <span className="dict-pos">{meaning.partOfSpeech}</span>
                      <ol style={{ paddingLeft: '20px', marginTop: '6px' }}>
                        {meaning.definitions.slice(0, 3).map((def, defIdx) => (
                          <li key={defIdx} className="dict-def-item">
                            <div>{def.definition}</div>
                            {def.example && <span className="dict-example">" {def.example} "</span>}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="dict-footer">
          <div className="dict-action-row">
            <a
              href={naverDictUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: '15px', textDecoration: 'none', height: '40px', minHeight: '40px', padding: '0 12px' }}
            >
              네이버 사전 검색 (Naver)
            </a>
            <a
              href={googleTranslateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '15px', textDecoration: 'none', height: '40px', minHeight: '40px', padding: '0 12px' }}
            >
              구글 번역기 (Google)
            </a>
          </div>
          <div className="dict-footer-text">
            단어 학습을 통해 더 자연스러운 영작 능력을 키워보세요!
          </div>
        </div>
      </div>
    </div>
  );
};
