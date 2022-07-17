import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GiffyMe } from './giffy-me/GiffyMe';

createRoot( document.getElementById( 'root' )! ).render(
    <StrictMode>
        <GiffyMe />
    </StrictMode>
);
