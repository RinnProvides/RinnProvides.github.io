/**
 * PRIVACY POLICY PAGE
 * 
 * Required for Google AdSense approval
 * Explains how we use cookies and collect data
 */

import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-game-bg">
      {/* Header */}
      <div className="bg-game-surface border-b border-game-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-game-text-muted hover:text-game-text transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-game-surface rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-game-text mb-4">Privacy Policy</h1>
          <p className="text-game-text-muted mb-8">Last updated: January 20, 2026</p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Introduction</h2>
            <p className="text-game-text-muted leading-relaxed">
              Welcome to Rinnxus. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Information We Collect</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              We collect and process the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4">
              <li><strong>Usage Data:</strong> Information about how you use our website, including games played, time spent, and browsing patterns.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, screen resolution, and device identifiers.</li>
              <li><strong>Location Data:</strong> Approximate geographic location based on your IP address.</li>
              <li><strong>Cookies:</strong> Small text files stored on your device (see "Cookies" section below).</li>
            </ul>
          </section>

          {/* How We Use Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">How We Use Cookies</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              We use cookies to provide you with the best possible experience. Here's how we use them:
            </p>
            
            <h3 className="text-xl font-semibold text-game-text mb-3 mt-6">Essential Cookies</h3>
            <p className="text-game-text-muted leading-relaxed mb-2">
              These cookies are necessary for the website to function properly. They enable core functionality such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4 mb-4">
              <li>Remembering your recently played games</li>
              <li>Saving your preferences (like category selections)</li>
              <li>Ensuring the website loads correctly</li>
            </ul>

            <h3 className="text-xl font-semibold text-game-text mb-3 mt-6">Analytics Cookies</h3>
            <p className="text-game-text-muted leading-relaxed mb-2">
              We use analytics cookies to understand how visitors interact with our website. This helps us improve your experience by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4 mb-4">
              <li>Identifying which games are most popular</li>
              <li>Understanding how users navigate the site</li>
              <li>Detecting and fixing technical issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-game-text mb-3 mt-6">Advertising Cookies</h3>
            <p className="text-game-text-muted leading-relaxed mb-2">
              We display third-party advertisements to keep our games free. Advertising cookies help:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4">
              <li>Show you relevant ads based on your interests</li>
              <li>Limit the number of times you see the same ad</li>
              <li>Measure the effectiveness of advertising campaigns</li>
              <li>Fund the development and maintenance of free games</li>
            </ul>
          </section>

          {/* Third-Party Advertising */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Third-Party Advertising</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              We use Google AdSense to display advertisements on our website. Google may use cookies and web beacons to 
              collect information about your visits to this and other websites in order to provide advertisements about 
              goods and services of interest to you.
            </p>
            <p className="text-game-text-muted leading-relaxed">
              You can opt out of personalized advertising by visiting{' '}
              <a 
                href="https://www.google.com/settings/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-game-primary hover:underline"
              >
                Google's Ads Settings
              </a>.
            </p>
          </section>

          {/* Local Storage */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Local Storage</h2>
            <p className="text-game-text-muted leading-relaxed">
              We use browser local storage to save your game preferences and recently played games on your device. 
              This information never leaves your device and is only used to enhance your experience. You can clear 
              this data at any time through your browser settings.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Data Sharing</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may 
              share data with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4">
              <li><strong>Advertising Partners:</strong> Google AdSense and other ad networks to display relevant advertisements.</li>
              <li><strong>Analytics Providers:</strong> To help us understand how our website is used.</li>
              <li><strong>Game Providers:</strong> When you play embedded games from third-party sources.</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Your Rights</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Opt out of personalized advertising</li>
              <li>Disable cookies through your browser settings</li>
            </ul>
          </section>

          {/* Cookie Management */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Managing Cookies</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4 mb-4">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences.</li>
              <li><strong>Ad Choices:</strong> Opt out of interest-based advertising through industry opt-out tools.</li>
              <li><strong>Do Not Track:</strong> Enable Do Not Track in your browser settings.</li>
            </ul>
            <p className="text-game-text-muted leading-relaxed">
              Please note that blocking or deleting cookies may impact your experience and some features may not work properly.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Children's Privacy</h2>
            <p className="text-game-text-muted leading-relaxed">
              Our website is intended for general audiences. We do not knowingly collect personal information from children 
              under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us so we can delete it.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Changes to This Privacy Policy</h2>
            <p className="text-game-text-muted leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page and updating the "Last updated" date at the top of this policy.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">Contact Us</h2>
            <p className="text-game-text-muted leading-relaxed">
              If you have any questions about this privacy policy or our use of cookies, please contact us at:{' '}
              <a href="mailto:privacy@unblockedgamesmax.com" className="text-game-primary hover:underline">
                privacy@unblockedgamesmax.com
              </a>
            </p>
          </section>

          {/* Consent */}
          <div className="mt-12 p-6 bg-game-primary/10 border-2 border-game-primary rounded-lg">
            <p className="text-game-text font-medium mb-4">
              By using our website, you consent to our privacy policy and agree to our use of cookies as described above.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-game-primary hover:bg-game-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              I Understand - Back to Games
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
