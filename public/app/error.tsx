'use client'

import { useEffect } from 'react'

type ErrorProps = {
    error: Error
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
            <h1>Algo deu errado</h1>
            <p style={{ color: '#c53030' }}>{error?.message ?? 'Erro desconhecido'}</p>
            {error?.stack && (
                <pre style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: 12, borderRadius: 6 }}>
                    {error.stack}
                </pre>
            )}
            <button onClick={() => reset()} style={{ marginTop: 12, padding: '8px 12px' }}>
                Tentar novamente
            </button>
        </div>
    )
}