import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import {Button} from './ui/Button';
import {Card} from './ui/Card';
import {Badge} from './ui/Badge';
import {cn, fadeIn} from '~/lib/design-system';

interface SizeGuideProps {
  productType?: string;
}

export function SizeGuide({productType = 'General'}: SizeGuideProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mock size data - in real app this would come from product data
  const sizeData = [
    {size: 'XS', chest: '30-32"', waist: '24-26"', hips: '32-34"'},
    {size: 'S', chest: '32-34"', waist: '26-28"', hips: '34-36"'},
    {size: 'M', chest: '34-36"', waist: '28-30"', hips: '36-38"'},
    {size: 'L', chest: '36-38"', waist: '30-32"', hips: '38-40"'},
    {size: 'XL', chest: '38-40"', waist: '32-34"', hips: '40-42"'},
    {size: 'XXL', chest: '40-42"', waist: '34-36"', hips: '42-44"'},
  ];

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        icon={<MagnifyingGlassIcon className="w-4 h-4" />}
        onClick={() => setIsOpen(true)}
      >
        Size Guide
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-50"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.9, opacity: 0}}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-secondary-200">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary-900">Size Guide</h2>
                    <p className="text-secondary-600 mt-1">{productType} sizing chart</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<XMarkIcon className="w-5 h-5" />}
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* How to Measure */}
                  <div className="bg-primary-25 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <InformationCircleIcon className="w-5 h-5 text-primary-600 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-primary-900 mb-2">How to measure</h3>
                        <ul className="text-sm text-primary-800 space-y-1">
                          <li>• <strong>Chest:</strong> Measure around the fullest part of your chest</li>
                          <li>• <strong>Waist:</strong> Measure around your natural waistline</li>
                          <li>• <strong>Hips:</strong> Measure around the fullest part of your hips</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Size Chart */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-secondary-50">
                          <th className="text-left p-3 font-semibold text-secondary-900 border border-secondary-200">Size</th>
                          <th className="text-left p-3 font-semibold text-secondary-900 border border-secondary-200">Chest</th>
                          <th className="text-left p-3 font-semibold text-secondary-900 border border-secondary-200">Waist</th>
                          <th className="text-left p-3 font-semibold text-secondary-900 border border-secondary-200">Hips</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sizeData.map((row, index) => (
                          <motion.tr
                            key={row.size}
                            className="hover:bg-secondary-25 transition-colors"
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.05}}
                          >
                            <td className="p-3 border border-secondary-200">
                              <Badge variant="outline" size="sm">{row.size}</Badge>
                            </td>
                            <td className="p-3 border border-secondary-200 text-secondary-700">{row.chest}</td>
                            <td className="p-3 border border-secondary-200 text-secondary-700">{row.waist}</td>
                            <td className="p-3 border border-secondary-200 text-secondary-700">{row.hips}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Size Recommendation */}
                  <Card padding="lg" className="bg-gradient-to-r from-success-25 to-primary-25">
                    <h3 className="font-semibold text-secondary-900 mb-3">🎯 Perfect Fit Guarantee</h3>
                    <p className="text-sm text-secondary-700 mb-3">
                      Not sure about your size? Our fit experts are here to help!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="primary" size="sm" fullWidth>
                        Chat with Fit Expert
                      </Button>
                      <Button variant="outline" size="sm" fullWidth>
                        Free Size Exchange
                      </Button>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
