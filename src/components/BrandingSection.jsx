import React from 'react';
import { Gamepad2, Trophy, Users, Calendar, Play, Zap, Star, Shield, Target, Crown } from 'lucide-react';

const BrandingSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">A. Brand Identity</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dynamic brand system that captures the energy of esports while maintaining professional tournament standards for the 2026 National Sports Championship Series
          </p>
        </div>

        {/* Logo Concept */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Logo Concept</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-12 h-12 text-purple-600" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">NSCS Logo</h3>
              <p className="text-gray-600">National Sports Championship Series</p>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-full h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-2"></div>
              <h3 className="font-semibold text-gray-900">Primary Gradient</h3>
              <p className="text-sm text-gray-600">#8B5CF6 → #EC4899</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-gray-900 rounded-lg mb-2"></div>
              <h3 className="font-semibold text-gray-900">Dark Background</h3>
              <p className="text-sm text-gray-600">#111827</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 bg-white border border-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-semibold text-gray-900">Light Background</h3>
              <p className="text-sm text-gray-600">#FFFFFF</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Typography Hierarchy</h2>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Heading 1 - Inter Bold</h1>
              <p className="text-gray-600">Used for main page titles and hero sections</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Heading 2 - Inter SemiBold</h2>
              <p className="text-gray-600">Used for section headers and card titles</p>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-2">Body Text - Inter Regular</p>
              <p className="text-gray-600">Used for paragraphs, descriptions, and general content</p>
            </div>
            <div>
              <p className="text-sm font-medium text-purple-600 uppercase tracking-wider">Caption - Inter Medium</p>
              <p className="text-gray-600">Used for labels, captions, and metadata</p>
            </div>
          </div>
        </div>

        {/* Visual Style Guide */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visual Style Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Gradients</h3>
              <div className="space-y-3">
                <div className="h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
                <div className="h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded"></div>
                <div className="h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded"></div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Iconography</h3>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-red-600" />
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Rhythm & Spacing */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Layout Rhythm & Spacing System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Spacing Scale</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-600 rounded mr-3"></div>
                  <span className="text-sm">4px (xs)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-4 bg-purple-600 rounded mr-3"></div>
                  <span className="text-sm">8px (sm)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-4 bg-purple-600 rounded mr-3"></div>
                  <span className="text-sm">16px (md)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-purple-600 rounded mr-3"></div>
                  <span className="text-sm">24px (lg)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-4 bg-purple-600 rounded mr-3"></div>
                  <span className="text-sm">32px (xl)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Border Radius</h3>
              <div className="space-y-3">
                <div className="w-16 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm"></div>
                <span className="text-sm">4px (small)</span>
                <div className="w-16 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
                <span className="text-sm">8px (medium)</span>
                <div className="w-16 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
                <span className="text-sm">12px (large)</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Shadows</h3>
              <div className="space-y-3">
                <div className="w-16 h-8 bg-white rounded shadow-sm border"></div>
                <span className="text-sm">Subtle</span>
                <div className="w-16 h-8 bg-white rounded shadow border"></div>
                <span className="text-sm">Medium</span>
                <div className="w-16 h-8 bg-white rounded shadow-lg border"></div>
                <span className="text-sm">Prominent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Experience Suite Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Digital Experience Suite</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Promotional Landing Page</h3>
              <p className="text-gray-600 text-sm">Event info, live streams, ticket sales, team rosters</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile App Prototype</h3>
              <p className="text-gray-600 text-sm">5+ screens: Live scores, stats, replays, brackets, chat</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Social Media Campaign</h3>
              <p className="text-gray-600 text-sm">Twitch/YouTube banners, post layouts, promotional content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingSection;


