import dom from './dom.js';

import { loadEvent } from './events/loadEvent.js';
import { resetEvent } from './events/resetEvent.js';
import { clickEvent } from './events/clickEvent.js';

loadEvent();
resetEvent(dom.restartBtn);
clickEvent(dom.board);
