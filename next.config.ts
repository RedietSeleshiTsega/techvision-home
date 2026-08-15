import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  // whatever you already have in here — leave it as is
};

export default withNextIntl(nextConfig);