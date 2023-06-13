'use client'

import { queryClientOptions } from '@/constants/query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode, useState } from 'react'

interface Props {
	children: ReactNode
}

export const Provider = ({ children }: Props) => {
	const [queryClient] = useState(() => new QueryClient(queryClientOptions))

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
