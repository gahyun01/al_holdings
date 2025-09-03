import React, { useEffect, useMemo, useState } from 'react'

// A floating panel that demonstrates use of the browser Navigator API
export default function NavigatorFeature() {
  const [open, setOpen] = useState(false)
  const [online, setOnline] = useState(navigator.onLine)
  const [coords, setCoords] = useState(null)
  const [geoError, setGeoError] = useState(null)
  const ua = useMemo(() => navigator.userAgent, [])
  const language = useMemo(() => navigator.language || navigator.languages?.[0], [])
  const platform = useMemo(() => navigator.platform, [])
  const [connection, setConnection] = useState(() => {
    const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    return c ? { effectiveType: c.effectiveType, downlink: c.downlink, rtt: c.rtt } : null
  })

  useEffect(() => {
    const onOnline = () => setOnline(true)
    const onOffline = () => setOnline(false)
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    const c = navigator.connection
    const onChange = () => c && setConnection({ effectiveType: c.effectiveType, downlink: c.downlink, rtt: c.rtt })
    c && c.addEventListener?.('change', onChange)
    return () => {
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
      c && c.removeEventListener?.('change', onChange)
    }
  }, [])

  const getLocation = () => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation not supported')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude, acc: pos.coords.accuracy })
        setGeoError(null)
      },
      (err) => setGeoError(err.message),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    )
  }

  return (
    <>
      <button
        type="button"
        aria-pressed={open}
        className="cta-button"
        style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 200 }}
        onClick={() => setOpen(o => !o)}
      >
        Navigator
      </button>
      {open && (
        <div
          className="glass"
          style={{ position: 'fixed', right: 20, bottom: 80, width: 320, padding: 20, zIndex: 200 }}
          role="dialog"
          aria-label="Navigator Information"
        >
          <h4 style={{ marginBottom: 10 }}>Navigator</h4>
          <div style={{ fontSize: '0.9rem', color: '#ddd', lineHeight: 1.5 }}>
            <div><strong>Status:</strong> {online ? 'Online' : 'Offline'}</div>
            <div><strong>Language:</strong> {language}</div>
            <div><strong>Platform:</strong> {platform}</div>
            <div style={{ wordBreak: 'break-word' }}><strong>User Agent:</strong> {ua}</div>
            {connection && (
              <div>
                <strong>Connection:</strong> {connection.effectiveType} • {connection.downlink} Mbps • {connection.rtt} ms
              </div>
            )}
            <div style={{ marginTop: 10 }}>
              <button className="cta-button secondary" type="button" onClick={getLocation}>Get Location</button>
              {coords && (
                <div style={{ marginTop: 8 }}>
                  <strong>Location:</strong> {coords.lat.toFixed(5)}, {coords.lon.toFixed(5)} (±{Math.round(coords.acc)}m)
                </div>
              )}
              {geoError && <div style={{ marginTop: 8, color: '#ff8080' }}>{geoError}</div>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

