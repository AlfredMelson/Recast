export default function LoadingTest() {
  return (
    <div id='loading'>
      <div style={{ height: '100%', textAlign: 'center' }}>
        <div style={{ height: '50%', margin: '0 0 -158px' }}></div>
        <div className='la-e'>
          <div className='la-b'>
            <div className='la-s la-l'></div>
            <div className='la-s la-r'></div>
            <div className='la-m'></div>
            <div
              style={{
                animation: '1.6s cubic-bezier(0,0,.19,.82)1.2s forwards kf-c',
                transform: 'scale(1.9)',
                transformOrigin: '110px 203px',
              }}>
              <div className='la-s la-l' style={{ background: '#4285f4' }} />
              <div className='la-s la-r' style={{ background: '#34a853' }} />
              <div className='la-m' style={{ background: '#ea4335' }} />
              <div className='la-c la-l' />
              <div className='la-c la-r' />
            </div>
          </div>
          <div className='la-k'>
            <div className='la-l'></div>
            <div className='la-r'></div>
            <div className='la-m'></div>
            <div className='la-i'>
              <div className='la-l'></div>
              <div className='la-r'></div>
              <div className='la-m'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
