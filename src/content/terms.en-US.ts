import type { LegalDoc } from './types'

/**
 * Terms of Service (English).
 *
 * The website is the single source of truth: the client's "Settings → About" and the
 * activation dialog link here instead of embedding a copy.
 */
const doc: LegalDoc = {
  title: 'Terms of Service',
  updated: 'Last updated: 1 November 2026',
  intro:
    'Welcome to SeekPhoto (referred to below as "the software"). Before using the software, please read and fully understand the contents of these terms. Using the software means you accept all of them.',
  sections: [
    {
      title: '1. Scope of these terms',
      blocks: [
        { type: 'h3', text: '1.1 Who these terms apply to' },
        {
          type: 'p',
          text: 'These terms are an agreement between you (referred to below as "the user") and the SeekPhoto development team (referred to below as "we") regarding your use of the software.',
        },
        { type: 'h3', text: '1.2 Relationship to other rules' },
        {
          type: 'p',
          text: 'These terms include the body of the agreement together with the various rules already published or to be published for the software. All such rules form an inseparable part of these terms and carry the same legal force as the body of the agreement.',
        },
      ],
    },
    {
      title: '2. Service content',
      blocks: [
        { type: 'h3', text: '2.1 Features' },
        { type: 'p', text: 'The software is a local photo management tool whose main features include:' },
        {
          type: 'ul',
          items: [
            'Photo browsing and management (timeline, albums, favourites)',
            'AI semantic search (finding photos with intelligent keywords)',
            'Search by image',
            'AI tagging and classification',
            'OCR text search',
            'Similar-photo duplicate detection',
            'Batch export',
          ],
        },
        { type: 'h3', text: '2.2 Changes to the service' },
        {
          type: 'p',
          text: 'We may change the service content as needed, including but not limited to adjusting features and upgrading versions. In the event of a material change, we will notify users through in-app notices or on the official website.',
        },
      ],
    },
    {
      title: '3. Licences and activation',
      blocks: [
        { type: 'h3', text: '3.1 Licensing and activation' },
        {
          type: 'p',
          text: 'The software offers three licence tiers: Free, Standard and Pro. Paid tiers are authorised through activation codes, which are bound to a device, and each code can be bound to a limited number of devices. After payment, an activation code is generated automatically and the current device is activated.',
        },
        { type: 'h3', text: '3.2 Acceptable use of activation codes' },
        { type: 'p', text: 'You must:' },
        {
          type: 'ul',
          items: [
            'Keep your activation code safe (it is shown once on the payment success screen — save it)',
            'Not transfer, give away or otherwise provide your activation code to third parties',
            'Not use an activation code obtained unlawfully',
          ],
        },
        { type: 'h3', text: '3.3 Recovering an activation code' },
        {
          type: 'p',
          text: 'If you need to activate again after changing device or reinstalling the system, you can recover your code in either of these ways:',
        },
        {
          type: 'ul',
          items: [
            'Use the "Auto-activate by order number" function in the app to obtain a new code with your purchase order number',
            'Provide your purchase order number and ask customer service to help recover it',
          ],
        },
      ],
    },
    {
      title: '4. Payment and refunds',
      blocks: [
        { type: 'h3', text: '4.1 Payment model' },
        {
          type: 'p',
          text: 'The software is sold as a one-time purchase: you pay once and can use it permanently, with no subscription fee. The free tier can be used for the core features for as long as you like.',
        },
        { type: 'h3', text: '4.2 Pricing' },
        {
          type: 'p',
          text: 'The software offers three licence tiers — Free, Standard and Pro — and the features and price of each tier are as shown on the pricing page at the time of purchase. Prices during the launch promotion are promotional prices; once the promotion ends the standard price applies, and the restored price does not constitute a commitment to the original price.',
        },
        { type: 'h3', text: '4.3 Refund policy' },
        { type: 'p', text: 'A refund may be requested if either of the following applies:' },
        {
          type: 'ul',
          items: [
            'Within 7 days of purchase, without meaningfully using the paid features',
            'The software has a serious functional defect that cannot be fixed',
          ],
        },
        {
          type: 'p',
          text: 'Please contact us through the official channels (see the "Support" page) to request a refund. We process requests within 5 business days of receiving them.',
        },
      ],
    },
    {
      title: '5. Rules for user conduct',
      blocks: [
        { type: 'p', text: 'When using the software you must observe the following:' },
        {
          type: 'ul',
          items: [
            { strong: 'Lawful use', text: 'The software must not be used for any unlawful or infringing purpose' },
            {
              strong: 'Respect for privacy',
              text: 'Obtain the consent of the relevant rights holders when handling other people’s photos',
            },
            {
              strong: 'Compliance',
              text: 'Comply with the laws and regulations on personal data protection in your region',
            },
            {
              strong: 'Respect for effort',
              text: 'Respect the developers’ work and do not tamper with the application’s copyright information',
            },
            {
              strong: 'Reasonable use',
              text: 'The software is a personal tool and is not suitable as an enterprise-scale bulk processing solution',
            },
          ],
        },
      ],
    },
    {
      title: '6. Intellectual property',
      blocks: [
        { type: 'h3', text: '6.1 Software copyright' },
        {
          type: 'p',
          text: 'The software and all of its intellectual property (including code, interface design, icon assets and documentation) belong to us and are protected by copyright law and related legislation. These terms grant you no intellectual property rights in the software.',
        },
        { type: 'h3', text: '6.2 Open-source components' },
        {
          type: 'p',
          text: 'The open-source components used in the software follow their own licences (such as MIT and Apache 2.0), and the copyright of those components remains with their original authors.',
        },
        { type: 'h3', text: '6.3 User data' },
        {
          type: 'p',
          text: 'The photos and related data you process with the software remain the intellectual property of you or the relevant rights holders, and the software claims no rights over user data.',
        },
        { type: 'h3', text: '6.4 Restrictions' },
        { type: 'p', text: 'Without our written permission you must not:' },
        {
          type: 'ul',
          items: [
            'Reverse engineer, decompile or disassemble the software',
            'Copy, modify or distribute the software',
            'Use the software for commercial purposes (except within the scope of the licence)',
            'Remove or alter any copyright notice in the software',
          ],
        },
      ],
    },
    {
      title: '7. Disclaimer',
      blocks: [
        {
          type: 'p',
          text: 'The software is provided "as is". We make no express or implied warranty as to its suitability, accuracy or reliability. The software is a local application: your photo data is stored on your own device and is never uploaded to our servers. Specifically:',
        },
        {
          type: 'ul',
          items: [
            {
              strong: 'Data safety',
              text: 'Although the software stores data locally, you remain responsible for backing up your own data. We are not liable for data loss caused by hardware failure, system crashes or similar events.',
            },
            {
              strong: 'Risk of use',
              text: 'We do not guarantee that every feature works perfectly on every device. We are not liable for any direct or indirect loss arising from your use of the software.',
            },
            {
              strong: 'Accuracy',
              text: 'AI search and text recognition results may contain errors and are for reference only; they do not constitute professional advice.',
            },
            {
              strong: 'Third-party services',
              text: 'The software may contain links to third-party websites, whose content and privacy policies fall outside the scope of these terms.',
            },
          ],
        },
      ],
    },
    {
      title: '8. Changes to and termination of these terms',
      blocks: [
        { type: 'h3', text: '8.1 Changes' },
        {
          type: 'p',
          text: 'We may update these terms from time to time. The updated terms will be published in the app or on the official website. Continuing to use the software means you accept the updated terms.',
        },
        { type: 'h3', text: '8.2 Termination' },
        {
          type: 'p',
          text: 'You may stop using the software and uninstall it at any time. After uninstalling, all local data remains on your computer; delete the application folder manually if you wish to remove it completely.',
        },
      ],
    },
    {
      title: '9. Governing law',
      blocks: [
        {
          type: 'p',
          text: 'These terms are governed by the laws of the People’s Republic of China. Any dispute arising from these terms or from your use of the software should first be settled through friendly negotiation; if that fails, either party may bring proceedings before a people’s court with jurisdiction over the developer’s location.',
        },
      ],
    },
    {
      title: '10. Contact us',
      blocks: [
        {
          type: 'p',
          text: 'If you have any questions or suggestions, please contact us through the official channels listed on the "Support" page:',
        },
        {
          type: 'ul',
          items: [
            {
              text: 'Official website: https://www.seekphoto.cn',
              href: 'https://www.seekphoto.cn',
            },
          ],
        },
      ],
    },
  ],
}

export default doc
