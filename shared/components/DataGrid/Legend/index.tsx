/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { h } from 'preact';
import { $legendCard, $legendRow, $legendHeader } from './styles.css';
import Dot from 'shared/components/Dot';

function Legend() {
  return (
    <div>
      <h4 class={$legendHeader}>Legend</h4>
      <div class={$legendCard}>
        <div class={$legendRow}>
          <Dot result="pass" /> Pass
        </div>
        <div class={$legendRow}>
          <Dot result="partial" /> Partial Pass
        </div>
        <div class={$legendRow}>
          <Dot result="fail" /> Fail
        </div>
      </div>
    </div>
  );
}

export default Legend;
