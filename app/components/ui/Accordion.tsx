import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {cn} from '~/lib/design-system';

export interface AccordionProps {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  defaultOpen?: string | string[];
  className?: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export function Accordion({
  items,
  type = 'single',
  defaultOpen,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (!defaultOpen) return [];
    return Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen];
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      if (type === 'single') {
        return prev.includes(id) ? [] : [id];
      } else {
        return prev.includes(id) 
          ? prev.filter(item => item !== id)
          : [...prev, id];
      }
    });
  };

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-secondary-200 rounded-lg overflow-hidden">
      <motion.button
        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-secondary-50 transition-colors duration-200"
        onClick={onToggle}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-3">
          {item.icon && (
            <span className="flex-shrink-0 text-primary-600">
              {item.icon}
            </span>
          )}
          <span className="font-medium text-secondary-900">
            {item.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon className="w-5 h-5 text-secondary-400" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-secondary-25 border-t border-secondary-200">
              <div className="text-secondary-700 leading-relaxed">
                {item.content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
