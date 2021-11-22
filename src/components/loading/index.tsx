export default function Loading() {
  return (
    <div id='loading'>
      <div
        style={{ bottom: 0, left: 0, overflow: 'hidden', position: 'absolute', right: 0, top: 0 }}
        id='explosion_clipper_div'>
        <div className='la-i'>
          <div
            style={{
              animation: '1.7s cubic-bezier(.17,0,.1,.87)1.2s kf-s',
              background: '#fafbfb',
              borderRadius: '330px',
              height: '660px',
              left: '50%',
              margin: '-406px -330px',
              top: '50%',
              transform: 'scale(0)',
              width: '660px',
            }}></div>
        </div>
      </div>
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
              <div className='la-s la-l' style={{ background: '#4285f4' }}></div>
              <div className='la-s la-r' style={{ background: '#34a853' }}></div>
              <div className='la-m' style={{ background: '#ea4335' }}></div>
              <div className='la-c la-l'></div>
              <div className='la-c la-r'></div>
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
        <div id='nlpt'></div>
        <div style={{ animation: 'a-s .25s 1.25s 1 forwards', opacity: 0 }} className='msg'>
          image
        </div>
      </div>
    </div>
  )
}
