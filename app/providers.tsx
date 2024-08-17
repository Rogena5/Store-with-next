import React from 'react'
import { ThemeProvider } from 'next-themes';

function providers({children}: {children: React.ReactNode}) {
  return (
   <>
   <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>{children}</ThemeProvider>
   </>
  )
}

export default providers