/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://whatsnext.js.org';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'indent';
export const BRAND_NAME = 'What’s Next.js';
export const SITE_NAME_MULTILINE = ['What’s', 'Next.js'];
export const SITE_NAME = 'What’s Next.js';
export const META_TITLE = 'What’s Next.js - Online meetup for Next.js community';
export const META_DESCRIPTION =
  'Online meetup for what\'s coming up next in the Next.js community';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'November 22, 2021';
export const SHORT_DATE = 'Nov 22 - 3:00pm PST';
export const FULL_DATE = 'Nov 22nd 3pm Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://github.com/indent-open/events-whats-next/blob/main/CODE_OF_CONDUCT.md';
export const REPO = 'https://github.com/indent-open/events-whats-next';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Talks',
    route: '/stage/talks'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  // {
  //   name: 'Jobs',
  //   route: '/jobs'
  // }
];

export type TicketGenerationState = 'default' | 'loading';
