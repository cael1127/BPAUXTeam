import React from 'react';
import { Star } from 'lucide-react';

const AccessibilitySection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">E. Accessibility & Responsiveness</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive accessibility compliance and device adaptation ensuring inclusive design across all screen sizes and assistive technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessibility Features</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">WCAG 2.1 AA Compliance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Minimum 4.5:1 contrast ratio for all text elements</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Proper heading hierarchy (H1-H6) for screen readers</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>ARIA labels for interactive elements and dynamic content</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Keyboard navigation support for all interactive elements</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Assistive Technology Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Screen reader compatibility with descriptive alt text</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Voice control support for navigation and actions</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Reduced motion preferences respected in animations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsive Design</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Breakpoint Strategy</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Mobile (320px - 767px)</span>
                    <span className="text-sm text-gray-600">Single column, touch-optimized</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Tablet (768px - 1023px)</span>
                    <span className="text-sm text-gray-600">Two columns, hybrid interactions</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Desktop (1024px+)</span>
                    <span className="text-sm text-gray-600">Multi-column, mouse-optimized</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Adaptive Components</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Flexible grid layouts that reflow based on screen size</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Responsive typography with fluid scaling</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Touch targets minimum 44px for mobile accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Image optimization with responsive srcset attributes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Device Adaptation Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Device Adaptation Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Mobile (320px - 767px)</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• Single column layout</li>
                <li>• Touch-optimized 44px+ targets</li>
                <li>• Swipe gestures for navigation</li>
                <li>• Bottom navigation bar</li>
                <li>• Simplified content hierarchy</li>
              </ul>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Tablet (768px - 1023px)</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• Two-column hybrid layout</li>
                <li>• Touch and mouse interactions</li>
                <li>• Sidebar navigation</li>
                <li>• Medium density content</li>
                <li>• Gesture + click support</li>
              </ul>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Desktop (1024px+)</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• Multi-column layout</li>
                <li>• Mouse-optimized interactions</li>
                <li>• Top navigation + sidebar</li>
                <li>• High density content</li>
                <li>• Hover states and tooltips</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assistive Technology Support */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Assistive Technology Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Screen Reader Compatibility</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Semantic HTML structure with proper heading hierarchy</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>ARIA labels for all interactive elements</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Live regions for dynamic content updates</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Skip links for main content navigation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Motor Impairment Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Full keyboard navigation support</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Focus indicators on all interactive elements</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Voice control compatibility</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Customizable interaction timeouts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Contrast Ratio Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-gray-900 font-bold mb-2">Body Text</div>
              <div className="text-gray-600 text-sm">Contrast: 7.2:1 ✓</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-gray-900 font-bold mb-2">Buttons</div>
              <div className="text-gray-600 text-sm">Contrast: 4.8:1 ✓</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-gray-900 font-bold mb-2">Links</div>
              <div className="text-gray-600 text-sm">Contrast: 5.1:1 ✓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySection;


