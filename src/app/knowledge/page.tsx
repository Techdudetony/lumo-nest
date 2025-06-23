'use client';

import { useState, Fragment } from 'react';
import useArticles from '@/hooks/useArticles';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { FunnelIcon, ChevronDownIcon } from '@heroicons/react/24/outline';


export default function KnowledgePage() {
  const { articles, loading } = useArticles();
  const [query, setQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState<'All' | string>('All');
  const [selectedTopic, setSelectedTopic] = useState<'All' | string>('All');

  // Unique sources and topics
  const sources = ['All', ...new Set(articles.map((a) => a.source))];
  const topics = ['All', ...new Set(articles.map((a) => a.topic || 'General'))];

  // Filtered and searched articles
  const filteredArticles = articles.filter((article) => {
    const sourceMatch = selectedSource === 'All' || article.source === selectedSource;
    const topicMatch = selectedTopic === 'All' || (article.topic || 'General') === selectedTopic;
    const searchMatch = article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.summary.toLowerCase().includes(query.toLowerCase());
    return sourceMatch && topicMatch && searchMatch;
  });

  return (
    <main className="min-h-screen px-6 py-12 text-gray-600">
      <h1 className="text-4xl font-bold mb-2 text-[#5AC0EC]">Knowledge Base</h1>
      <p className="text-gray-600 mb-8">
        Learn about mental, behavioral, and neurological conditions from credible sources.
      </p>

      {/* Search & Filter */}
      <div className="flex items-center gap-3 mb-6">
        <input
          type='text'
          placeholder='Search articles...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='flex-grow px-4 py-2 bg-transparent border border-gray-300 rounded-lg text-sm text-white 
          placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5AC0EC]'
        />

        <Popover className="relative">
          <PopoverButton className="flex items-center gap-2 px-3 px-2 text-sm font-medium text-white bg-[#5AC0EC]/10 hover:bg-[#5AC0EC]/20 rounded-lg">
            <FunnelIcon className='w-5 h-5' />
            Filters
            <ChevronDownIcon className='w-4 h-4' />
          </PopoverButton>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className="absolute z-10 mt-2 right-0 w-72 bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-xl ring-1 ring-white/20">
              <h4 className='text-sm text-[#5AC0EC] font-semibold mb-2'>Source</h4>
              <div className='flex flex-wrap gap-2 mb-4'>
                {sources.map((src) => (
                  <button
                    key={src}
                    onClick={() => setSelectedSource(src)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${selectedSource === src
                      ? 'bg-[#5AC0EC] text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-[#5AC0EC]/20'
                      }`}
                  >
                    {src}
                  </button>
                ))}
              </div>

              <h4 className='text-sm text-[#5AC0EC] font-semibold mb-2'>Topic</h4>
              <div className='flex flex-wrap gap-2'>
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${selectedTopic === topic
                      ? 'bg-[#5AC0EC] text-black'
                      : 'bg-white/5 text-gray-400 hover:bg-[#5AC0EC]/20'
                      }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>
      </div>

      {/* Articles */}
      {loading ? (
        <p className="text-center text-neutral-400 mt-20">Loading articles...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl ring-1 ring-white/10 transition-transform hover:-translate-y-1 hover:ring-[#5AC0EC]/30"
            >
              {/* Source & Date */}
              <div className='flex justify-between items-center mb-2 text-sm text-gray-400'>
                <span>{article.source}</span>
                {article.publishedAt && (
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                )}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-[#5AC0DA] mb-2">{article.title}</h2>

              {/* Summary */}
              <p className="text-neutral-300 text-sm line-clamp-3">{article.summary}</p>

              {/* Topic Badge */}
              {article.topic && (
                <span className='inline-block bg-[#5AC0EC]/20 text-[#5AC0EC] text-xs font-semibold px-3 py-1 rounded-full mb-3'>
                  {article.topic}
                </span>
              )}

              {/* Read Link */}
              <a
                href={article.sourceURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-400 ml-2 text-sm font-medium hover:text-[#5AC0EC] transition hover:underline cursor-pointer"
              >
                Read on {article.source}
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
