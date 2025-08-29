import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  QuestionMarkCircleIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  PlusIcon,
  CheckCircleIcon,
  ClockIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {Modal} from './ui/Modal';
import {Input} from './ui/Input';
import {cn, staggerContainer, staggerItem, fadeIn} from '~/lib/design-system';

interface Question {
  id: string;
  author: {
    name: string;
    verified: boolean;
  };
  question: string;
  date: string;
  helpful: number;
  answer?: {
    author: {
      name: string;
      role: 'customer' | 'seller' | 'expert';
    };
    content: string;
    date: string;
    helpful: number;
  };
  category: 'general' | 'shipping' | 'sizing' | 'material' | 'care';
}

interface ProductQandAProps {
  productId: string;
  productName: string;
  className?: string;
}

export function ProductQandA({productId, productName, className}: ProductQandAProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('newest');
  const [showAskQuestion, setShowAskQuestion] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Q&A data - in real app, this would come from API
  const mockQuestions: Question[] = [
    {
      id: '1',
      author: { name: 'Alex Thompson', verified: true },
      question: 'What are the exact dimensions of this product?',
      date: '2024-01-15',
      helpful: 12,
      category: 'general',
      answer: {
        author: { name: 'Store Team', role: 'seller' },
        content: 'The dimensions are 15cm x 10cm x 5cm. It weighs approximately 500g. Perfect for most standard uses.',
        date: '2024-01-16',
        helpful: 18,
      },
    },
    {
      id: '2',
      author: { name: 'Maria Garcia', verified: false },
      question: 'How long does shipping typically take?',
      date: '2024-01-14',
      helpful: 8,
      category: 'shipping',
      answer: {
        author: { name: 'Customer Service', role: 'seller' },
        content: 'Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.',
        date: '2024-01-14',
        helpful: 15,
      },
    },
    {
      id: '3',
      author: { name: 'John Smith', verified: true },
      question: 'Is this suitable for outdoor use?',
      date: '2024-01-12',
      helpful: 6,
      category: 'material',
      answer: {
        author: { name: 'Tech Expert', role: 'expert' },
        content: 'Yes, it has an IP65 rating which makes it resistant to dust and water. Perfect for outdoor activities.',
        date: '2024-01-13',
        helpful: 22,
      },
    },
    {
      id: '4',
      author: { name: 'Sarah Wilson', verified: true },
      question: 'What size should I order if I usually wear medium?',
      date: '2024-01-10',
      helpful: 4,
      category: 'sizing',
    },
    {
      id: '5',
      author: { name: 'David Lee', verified: false },
      question: 'How do I clean and maintain this product?',
      date: '2024-01-08',
      helpful: 9,
      category: 'care',
      answer: {
        author: { name: 'Product Specialist', role: 'seller' },
        content: 'Clean with a damp cloth and mild soap. Avoid harsh chemicals. Store in a dry place when not in use.',
        date: '2024-01-09',
        helpful: 14,
      },
    },
  ];

  const categories = [
    { id: 'general', name: 'General', icon: QuestionMarkCircleIcon },
    { id: 'shipping', name: 'Shipping', icon: ClockIcon },
    { id: 'sizing', name: 'Sizing', icon: FunnelIcon },
    { id: 'material', name: 'Material', icon: CheckCircleIcon },
    { id: 'care', name: 'Care', icon: HandThumbUpIcon },
  ];

  const filteredQuestions = mockQuestions.filter(q => {
    const matchesCategory = !selectedCategory || q.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer?.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    switch (sortBy) {
      case 'helpful':
        return b.helpful - a.helpful;
      case 'answered':
        return (b.answer ? 1 : 0) - (a.answer ? 1 : 0);
      case 'unanswered':
        return (a.answer ? 1 : 0) - (b.answer ? 1 : 0);
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'seller': return 'text-primary-600';
      case 'expert': return 'text-purple-600';
      default: return 'text-secondary-600';
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'seller': return 'Official';
      case 'expert': return 'Expert';
      default: return 'Customer';
    }
  };

  return (
    <motion.div 
      className={cn('space-y-6', className)}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div variants={staggerItem}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">
              Questions & Answers
            </h3>
            <p className="text-secondary-600">
              Get answers from the community and our team
            </p>
          </div>
          
          <Button
            variant="primary"
            icon={<PlusIcon className="w-4 h-4" />}
            onClick={() => setShowAskQuestion(true)}
          >
            Ask a Question
          </Button>
        </div>
      </motion.div>

      {/* Search & Filters */}
      <motion.div variants={staggerItem}>
        <Card className="p-6">
          <div className="space-y-4">
            {/* Search */}
            <Input
              type="search"
              placeholder="Search questions and answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<QuestionMarkCircleIcon className="w-5 h-5" />}
            />

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Questions ({mockQuestions.length})
              </Button>
              {categories.map((category) => {
                const count = mockQuestions.filter(q => q.category === category.id).length;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'primary' : 'outline'}
                    size="sm"
                    icon={<category.icon className="w-4 h-4" />}
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.id ? null : category.id
                    )}
                  >
                    {category.name} ({count})
                  </Button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-secondary-600">
                {filteredQuestions.length} question(s) found
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-secondary-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="helpful">Most Helpful</option>
                <option value="answered">Answered First</option>
                <option value="unanswered">Unanswered First</option>
              </select>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Questions List */}
      <motion.div className="space-y-4" variants={staggerContainer}>
        <AnimatePresence mode="wait">
          {sortedQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              variants={staggerItem}
              custom={index}
              layout
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {/* Question */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-medium text-secondary-900">
                            {question.author.name}
                          </span>
                          {question.author.verified && (
                            <Badge variant="success" size="sm" icon={<CheckCircleIcon className="w-3 h-3" />}>
                              Verified
                            </Badge>
                          )}
                          <span className="text-sm text-secondary-500">
                            asked on {question.date}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                          Q: {question.question}
                        </h4>
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        size="sm"
                        className="capitalize flex-shrink-0"
                      >
                        {question.category}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<HandThumbUpIcon className="w-4 h-4" />}
                        className="text-secondary-600 hover:text-success-600"
                      >
                        Helpful ({question.helpful})
                      </Button>
                      
                      {!question.answer && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary-600 hover:text-primary-700"
                        >
                          Answer this question
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Answer */}
                  {question.answer && (
                    <motion.div 
                      className="border-l-4 border-primary-200 pl-6 bg-primary-25 p-4 rounded-r-lg"
                      variants={fadeIn}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={cn('font-medium', getRoleColor(question.answer.author.role))}>
                            {question.answer.author.name}
                          </span>
                          <Badge 
                            variant={question.answer.author.role === 'seller' ? 'primary' : 
                                   question.answer.author.role === 'expert' ? 'secondary' : 'outline'}
                            size="sm"
                          >
                            {getRoleBadge(question.answer.author.role)}
                          </Badge>
                          <span className="text-sm text-secondary-500">
                            answered on {question.answer.date}
                          </span>
                        </div>
                        
                        <p className="text-secondary-700 leading-relaxed">
                          <span className="font-semibold text-primary-600">A:</span> {question.answer.content}
                        </p>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<HandThumbUpIcon className="w-4 h-4" />}
                          className="text-secondary-600 hover:text-success-600"
                        >
                          Helpful ({question.answer.helpful})
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Unanswered Status */}
                  {!question.answer && (
                    <div className="flex items-center gap-2 text-warning-600">
                      <ClockIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Waiting for answer</span>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {sortedQuestions.length === 0 && (
          <motion.div variants={fadeIn}>
            <Card className="p-12 text-center">
              <QuestionMarkCircleIcon className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                No questions found
              </h3>
              <p className="text-secondary-600 mb-6">
                {searchQuery || selectedCategory 
                  ? 'Try adjusting your search or filters'
                  : 'Be the first to ask a question about this product!'
                }
              </p>
              <Button
                variant="primary"
                icon={<PlusIcon className="w-4 h-4" />}
                onClick={() => setShowAskQuestion(true)}
              >
                Ask the First Question
              </Button>
            </Card>
          </motion.div>
        )}
      </motion.div>

      {/* Ask Question Modal */}
      <AskQuestionModal
        isOpen={showAskQuestion}
        onClose={() => setShowAskQuestion(false)}
        productName={productName}
        categories={categories}
      />
    </motion.div>
  );
}

// Ask Question Modal Component
interface AskQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  categories: Array<{id: string; name: string; icon: any}>;
}

function AskQuestionModal({isOpen, onClose, productName, categories}: AskQuestionModalProps) {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('general');
  const [email, setEmail] = useState('');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Ask a Question"
      description={`Get answers about ${productName} from our community`}
      size="lg"
    >
      <div className="space-y-6">
        {/* Question */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Your Question *
          </label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="What would you like to know about this product?"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Email */}
        <Input
          type="email"
          label="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Get notified when someone answers"
          helper="We'll send you an email when your question is answered"
        />

        {/* Actions */}
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="primary"
            disabled={!question.trim()}
          >
            Submit Question
          </Button>
        </div>
      </div>
    </Modal>
  );
}
