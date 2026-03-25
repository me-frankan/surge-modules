// Auto reload profile on network change
// Fixes: NE tunnel dies during sleep/wake before WiFi reconnects

setTimeout(() => {
  $httpAPI('POST', '/v1/dns/flush', {}, () => {
    $httpAPI('POST', '/v1/profiles/reload', {}, () => {
      $notification.post('Surge', 'Network changed', 'DNS flushed + profile reloaded');
      $done();
    });
  });
}, 3000);
