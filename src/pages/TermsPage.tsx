/**
 * TERMS OF SERVICE PAGE
 * 
 * Required for Google AdSense approval
 * Covers legal requirements for website usage
 */

import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-game-text mb-4">Terms of Service</h1>
          <p className="text-game-text-muted mb-8">Last updated: January 20, 2026</p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">1. Agreement to Terms</h2>
            <p className="text-game-text-muted leading-relaxed">
              By accessing and using Rinnxus ("the Website"), you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
              from using or accessing this site.
            </p>
          </section>

          {/* Acceptable Use */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">2. Acceptable Use</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              You agree to use the Website only for lawful purposes. You must not use this Website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To exploit, harm, or attempt to exploit or harm minors in any way</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>To impersonate or attempt to impersonate the Website, a Website employee, another user, or any other person or entity</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website</li>
            </ul>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">3. Prohibited Activities</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              You may not access or use the Website for any purpose other than that for which we make the Website available. 
              Prohibited activities include, but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4">
              <li>Attempting to bypass or break any security mechanism on any of the Website or using the Website in any other manner that could interfere with the Website</li>
              <li>Engaging in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools</li>
              <li>Attempting to impersonate another user or person</li>
              <li>Using the Website in a manner inconsistent with any applicable laws or regulations</li>
              <li>Selling or otherwise transferring your profile</li>
              <li>Using any information obtained from the Website in order to harass, abuse, or harm another person</li>
              <li>Interfering with, disrupting, or creating an undue burden on the Website or the networks or services connected to the Website</li>
              <li>Attempting to gain unauthorized access to any portion of the Website</li>
            </ul>
          </section>

          {/* Intellectual Property Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">4. Intellectual Property Rights</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              Unless otherwise indicated, the Website is our proprietary property and all source code, databases, functionality, 
              software, website designs, audio, video, text, photographs, and graphics on the Website (collectively, the "Content") 
              and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed 
              to us, and are protected by copyright and trademark laws.
            </p>
            <p className="text-game-text-muted leading-relaxed mb-4">
              The Content and Marks are provided on the Website "AS IS" for your information and personal use only. Except as 
              expressly provided in these Terms of Service, no part of the Website and no Content or Marks may be copied, 
              reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, 
              distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express 
              prior written permission.
            </p>
            <h3 className="text-xl font-semibold text-game-text mb-3 mt-6">Third-Party Games</h3>
            <p className="text-game-text-muted leading-relaxed">
              All games featured on this Website are the property of their respective owners and developers. We do not claim 
              ownership of any games and provide them for entertainment purposes only. All game-related trademarks, logos, 
              and images are property of their respective owners.
            </p>
          </section>

          {/* User Contributions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">5. User Contributions</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              The Website may provide you with the opportunity to rate games and provide feedback. By providing any contribution 
              to the Website, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, 
              and distribute such contributions on and through the Website.
            </p>
            <p className="text-game-text-muted leading-relaxed">
              You represent and warrant that your contributions do not violate the privacy rights, publicity rights, copyrights, 
              contract rights, or any other rights of any person.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">6. Disclaimers</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              THE WEBSITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE WEBSITE SERVICES 
              WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR 
              IMPLIED, IN CONNECTION WITH THE WEBSITE AND YOUR USE THEREOF.
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4">
              <li>We make no warranties or representations about the accuracy or completeness of the Website's content</li>
              <li>We will not be liable for any errors or omissions in content</li>
              <li>We make no guarantees regarding availability of games or website functionality</li>
              <li>Third-party games may contain bugs, errors, or inappropriate content - we are not responsible for their content</li>
              <li>We do not guarantee that the Website will be secure or free from bugs or viruses</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">7. Limitation of Liability</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, 
              INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, 
              LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE WEBSITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY 
              OF SUCH DAMAGES.
            </p>
            <p className="text-game-text-muted leading-relaxed">
              NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND 
              REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US. 
              CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. 
              IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY 
              HAVE ADDITIONAL RIGHTS.
            </p>
          </section>

          {/* School/Work Usage */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">8. School and Work Usage</h2>
            <p className="text-game-text-muted leading-relaxed mb-4">
              We acknowledge that some users may access this Website from school or work networks. You are solely responsible 
              for ensuring your use of this Website complies with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-game-text-muted ml-4">
              <li>Your school or workplace's acceptable use policies</li>
              <li>Any rules or regulations regarding computer and internet usage</li>
              <li>Applicable laws in your jurisdiction</li>
            </ul>
            <p className="text-game-text-muted leading-relaxed mt-4">
              We are not responsible for any consequences arising from your use of this Website in violation of school, 
              workplace, or other institutional policies.
            </p>
          </section>

          {/* Third-Party Advertising */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">9. Third-Party Advertising</h2>
            <p className="text-game-text-muted leading-relaxed">
              The Website displays third-party advertisements served by Google AdSense and other advertising partners. 
              We are not responsible for the content of advertisements or products/services offered by advertisers. 
              Any interactions with advertisers, including payment transactions and delivery of goods or services, are 
              solely between you and the advertiser.
            </p>
          </section>

          {/* Modifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">10. Modifications to Terms</h2>
            <p className="text-game-text-muted leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes 
              a material change will be determined at our sole discretion. By continuing to access or use our Website after 
              any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">11. Termination</h2>
            <p className="text-game-text-muted leading-relaxed">
              We may terminate or suspend your access to the Website immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach these Terms of Service. Upon 
              termination, your right to use the Website will immediately cease.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">12. Governing Law</h2>
            <p className="text-game-text-muted leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the United States, without 
              regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
              will not be considered a waiver of those rights.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-game-text mb-4">13. Contact Us</h2>
            <p className="text-game-text-muted leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:legal@unblockedgamesmax.com" className="text-game-primary hover:underline">
                legal@unblockedgamesmax.com
              </a>
            </p>
          </section>

          {/* Acceptance */}
          <div className="mt-12 p-6 bg-game-primary/10 border-2 border-game-primary rounded-lg">
            <p className="text-game-text font-medium mb-4">
              By using our Website, you acknowledge that you have read and understood these Terms of Service and agree 
              to be bound by them.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-game-primary hover:bg-game-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              I Agree - Back to Games
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
