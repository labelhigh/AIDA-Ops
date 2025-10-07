import React, { useState, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getBusinessInsight } from '../services/geminiService';
import { GeminiResponse, Role } from '../types';
import { ArrowRightIcon } from './icons/Icons';
import { ROLE_SPECIFIC_QUERIES } from '../constants';

interface ChatInterfaceProps {
  role: Role;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ role }) => {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<GeminiResponse | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await getBusinessInsight(prompt);
      setResponse(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : '發生了未預期的錯誤。');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  const placeholderQueries = ROLE_SPECIFIC_QUERIES[role];

  return (
    <div className="h-full flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 mb-3">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="對您的業務提出問題..."
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="w-full sm:w-auto flex items-center justify-center px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              提問 <ArrowRightIcon className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </form>
      
      <div className="flex gap-2 flex-wrap mb-4">
        {placeholderQueries.map(q => (
          <button key={q} onClick={() => setPrompt(q)} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors">
            {q}
          </button>
        ))}
      </div>


      {error && <div className="text-red-500 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-sm">{error}</div>}

      <div className="flex-grow mt-4 border-t border-gray-200 dark:border-gray-700 pt-4 overflow-y-auto">
        {response ? (
          <div className="animate-fade-in">
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{response.summary}</p>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={response.chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <XAxis dataKey={response.xAxisKey} tick={{ fill: 'currentColor', fontSize: 11 }} />
                  <YAxis tick={{ fill: 'currentColor', fontSize: 11 }} />
                  <Tooltip
                      contentStyle={{
                          backgroundColor: 'rgba(31, 41, 55, 0.8)',
                          borderColor: '#4f46e5',
                          color: '#ffffff',
                          borderRadius: '0.5rem',
                      }}
                      cursor={{fill: 'rgba(79, 70, 229, 0.1)'}}
                  />
                  <Bar dataKey={response.dataKey} fill="#4f46e5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400 h-full flex items-center justify-center">
             <p className="text-sm">AIDA-Ops 將在此提供答案與數據視覺化圖表。</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;