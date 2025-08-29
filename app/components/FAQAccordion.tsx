import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ChevronDownIcon} from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({items, className = ''}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="border border-secondary-200 rounded-lg overflow-hidden">
          <button
            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-secondary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.has(index)}
            aria-controls={`faq-content-${index}`}
          >
            <span className="font-medium text-secondary-900 pr-4">{item.question}</span>
            <ChevronDownIcon 
              className={`w-5 h-5 text-secondary-500 transition-transform duration-200 flex-shrink-0 ${
                openItems.has(index) ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <AnimatePresence>
            {openItems.has(index) && (
              <motion.div
                id={`faq-content-${index}`}
                initial={{height: 0, opacity: 0}}
                animate={{height: 'auto', opacity: 1}}
                exit={{height: 0, opacity: 0}}
                transition={{duration: 0.2, ease: 'easeInOut'}}
                className="overflow-hidden"
              >
                <div className="px-4 pb-3">
                  <p className="text-secondary-700 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
