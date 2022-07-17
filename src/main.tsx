import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GiffyMe } from './giffy-me/GiffyMe';

import './index.css';

createRoot( document.getElementById( 'root' )! ).render(
    <StrictMode>
        <GiffyMe />
    </StrictMode>
);
