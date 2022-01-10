import * as React from 'react'

interface Props {
  children: React.ReactNode
}
interface State {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>
    }

    return this.props.children
  }
}

// generic type of promise
// connects a promise to Suspense & ErrorBoundary
// -> ErrorBoundary // Error State
// -> React.Suspense // Pending State
// -> renderData() // Success State
//
export function handleSuspense(givenPromise) {
  console.log('givenPromise', givenPromise)
  let status = 'pending'
  let result
  const principal = givenPromise.then(
    onFulfillment => {
      status = 'success'
      result = onFulfillment
    },
    onRejection => {
      status = 'error'
      result = onRejection
    }
  )
  // return an object with a read function that relays different states to
  // Suspense & ErrorBoundary in order for the fallback and error to take effect
  return {
    read() {
      if (status === 'pending') {
        console.log('pending')
        throw principal
      } else if (status === 'error') {
        console.log('error')
        throw result
      } else if (status === 'success') {
        console.log('success')
        return result
      }
    },
  }
}
