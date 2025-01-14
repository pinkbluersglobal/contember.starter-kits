import * as React from 'react'
import { ApplicationEntrypoint, Pages, runReactApp } from '@contember/admin'
import { Layout } from './components/Layout'
import '@contember/admin/style.css'

runReactApp(
	<ApplicationEntrypoint
		basePath={import.meta.env.BASE_URL}
		apiBaseUrl={import.meta.env.VITE_CONTEMBER_ADMIN_API_BASE_URL}
		sessionToken={import.meta.env.VITE_CONTEMBER_ADMIN_SESSION_TOKEN}
		project={import.meta.env.VITE_CONTEMBER_ADMIN_PROJECT_NAME}
		stage="live"
		defaultDimensions={{ locale: ['en'] }}
		envVariables={{ WEB_URL: import.meta.env.VITE_CONTEMBER_ADMIN_WEB_URL }}
		children={<Pages layout={Layout} children={import.meta.glob('./pages/**/*.tsx')} />}
	/>,
)
