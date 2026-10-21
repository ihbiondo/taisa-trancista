(() => {
      const phone = '5514998066534';
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.getElementById('navLinks');
      const form = document.getElementById('bookingForm');
      const styleSelect = document.getElementById('braidStyle');
      const toast = document.getElementById('toast');
      let toastTimer;

      document.getElementById('year').textContent = new Date().getFullYear();
      menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        menuToggle.textContent = isOpen ? '×' : '☰';
      });
      navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
        menuToggle.textContent = '☰';
      }));

      document.querySelectorAll('.style-cta').forEach(link => link.addEventListener('click', () => {
        const selectedStyle = link.dataset.style;
        if (selectedStyle) styleSelect.value = selectedStyle;
      }));

      form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        const name = document.getElementById('clientName').value.trim();
        const style = styleSelect.value;
        const when = document.getElementById('when').value;
        const details = document.getElementById('details').value.trim();
        const message = [
          'Oi, Taísa! Encontrei seu trabalho pelo site e gostaria de pedir um orçamento.',
          '',
          `Meu nome: ${name}`,
          `Estilo de interesse: ${style}`,
          `Quando gostaria: ${when}`,
          details ? `Detalhes: ${details}` : ''
        ].filter(Boolean).join('\n');
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      });

      document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
        link.addEventListener('click', () => {
          if (link.classList.contains('whatsapp-float')) return;
          toast.textContent = 'Abrindo conversa no WhatsApp…';
          toast.classList.add('show');
          clearTimeout(toastTimer);
          toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
        });
      });
    })();
