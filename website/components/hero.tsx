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

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        What’s Next{' '}
        <span style={{ display:'inline-block', verticalAlign: 'bottom', transform:'translateY(40%)' }}>
          <svg
            height={100}
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.629 8.05c.351 0 .527.184.527.552-.086.226-.195.375-.328.445a.528.528 0 01-.82-.399.467.467 0 01.129-.34c.093-.117.258-.203.492-.257zM.117 12.692c.227 0 .434.059.621.176l.598.375c.203.14.426.27.668.387.242.117.523.176.844.176.32 0 .632-.043.937-.13.305-.077.578-.202.82-.374.243-.164.438-.383.586-.656.149-.266.223-.582.223-.95 0-.61-.05-1.242-.152-1.898a21.069 21.069 0 00-.375-1.957 32.421 32.421 0 00-.492-1.91c-.172-.617-.332-1.188-.48-1.711a.352.352 0 00-.013-.059.353.353 0 01-.011-.058c0-.157.054-.262.164-.317a.697.697 0 01.351-.094c.032 0 .078.004.14.012.063.008.102.012.118.012.242.61.469 1.234.68 1.875.218.633.41 1.277.574 1.933.164.657.293 1.313.387 1.97.093.663.14 1.32.14 1.968 0 .508-.09.969-.27 1.383a2.962 2.962 0 01-.726 1.054c-.312.29-.687.512-1.125.668-.43.157-.898.235-1.406.235-.336 0-.668-.04-.996-.117a2.788 2.788 0 01-.902-.352 1.885 1.885 0 01-.657-.656C.2 13.41.117 13.082.117 12.69zM2.871.832v-.14c0-.07.008-.141.024-.212a.51.51 0 01.082-.199C3.016.227 3.074.2 3.152.2c.133 0 .235.02.305.059.07.031.121.074.152.129.032.047.051.11.059.187a2.26 2.26 0 010 .457 1.024 1.024 0 01-.047.223.389.389 0 01-.117.176.376.376 0 01-.223.058.376.376 0 01-.222-.058.522.522 0 01-.13-.164.837.837 0 01-.046-.211A2.243 2.243 0 012.87.832zm5.8 7.64c.126-.085.274-.195.446-.327.18-.141.36-.29.54-.446.179-.156.347-.32.503-.492.156-.172.277-.336.363-.492a.931.931 0 00.141-.457c0-.14-.07-.258-.21-.352-.25 0-.524.012-.821.035-.297.016-.594.024-.89.024a6.272 6.272 0 01-.868-.082 2.237 2.237 0 01-.738-.258 1.423 1.423 0 01-.528-.527c-.125-.235-.187-.532-.187-.891 0-.422.078-.8.234-1.137.164-.343.38-.644.645-.902.265-.266.562-.496.89-.691A7.685 7.685 0 019.2.96c.203.055.39.152.563.293.172.14.32.297.445.469a.687.687 0 01-.328.398c-.156.094-.34.176-.55.246l-.645.223a2.45 2.45 0 00-.621.316c-.18.125-.333.293-.458.504-.125.203-.187.473-.187.809 0 .25.062.433.187.55.125.118.29.2.493.247.203.039.433.054.691.046.258-.015.52-.035.785-.058.274-.024.54-.035.797-.035.258-.008.488.023.691.093a.948.948 0 01.481.317c.125.148.188.367.188.656 0 .125-.043.285-.13.48a5 5 0 01-.809 1.29c-.179.218-.37.418-.573.597a3.73 3.73 0 01-.598.434c-.195.11-.379.164-.55.164-.165 0-.274-.059-.329-.176a.94.94 0 01-.07-.351z"
              fill="#ED0909"
            />
          </svg>
        </span>
      </h1>
      <h2 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.description)}>
        Online meetup for what's coming up next in the Next.js community
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          <strong title="Extremely">Online</strong>
        </p>
      </div>
    </div>
  );
}
