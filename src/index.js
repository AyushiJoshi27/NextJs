import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient (
  "https://jqoerisbkbclhvbfxaox.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxb2VyaXNia2JjbGh2YmZ4YW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0MjU4NTQsImV4cCI6MjAxMDAwMTg1NH0.MqY2LfERx3jsNcYxS3D79cq19DqoFnFY1QSfOkl4CjU"
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

reportWebVitals();
