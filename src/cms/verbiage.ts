type TestimonialAlias = {
  index: number
  quote: string
  profile: {
    name: string
    role: string
  }
}
export const TESTIMONIAL: TestimonialAlias[] = [
  {
    index: 0,
    quote:
      '“MUI offers a wide variety of high quality components that have allowed us to ship features faster. MUI has been used by more than a hundred engineers in our organization. What&#39;s more, MUI&#39;s well architected customization system has allowed us to differentiate ourselves in the marketplace.”',
    profile: {
      name: 'Joona Rahko',
      role: 'Staff Software Engineer',
    },
  },
  {
    index: 1,
    quote:
      '“MUI looks great and lets us deliver fast, thanks to their solid API design and documentation - it&#39;s refreshing to use a component library where you get everything you need from their site rather than Stack Overflow. We think the upcoming version, with extra themes and customizability, will make MUI even more of a game changer. We&#39;re extremely grateful to the team for the time and effort spent maintaining the project.”',
    profile: {
      name: 'Jean-Laurent de Morlhon',
      role: 'VP of Engineering',
    },
  },
  {
    index: 2,
    quote:
      '“After much research on React component libraries, we decided to ditch our in-house library for MUI, using its powerful customization system to implement our Design System. This simple move did a rare thing in engineering: it lowered our maintenance costs while enhancing both developer and customer experience. All of this was done without sacrificing the organization&#39;s branding and visual identity.”',
    profile: {
      name: 'Gustavo de Paula',
      role: 'Specialist Software Engineer',
    },
  },
]

type ValuePropAlias = {
  title: string
  description: string
}
export const VALUE_PROP: ValuePropAlias[] = [
  {
    title: 'Beautifully designed',
    description:
      'You can start your projects with Google&#39;s Material Design or build your own designs using the sophisticated theming features.',
  },
  {
    title: 'Easily customized',
    description:
      'Enjoy the power of our components without sacrificing the styles you want. Tweak how your components render down to the very last class.',
  },
  {
    title: 'Superb documentation',
    description:
      'Our docs were shaped throughout the years with the help and experience of our trusted 2,000+ open-source contributors. It&#39;s all there!',
  },
  {
    title: 'Accessible in mind',
    description:
      'We care about making it great for everyone. We improve accessibility for all of our components constantly, helping you to reach the largest audience possible!',
  },
]

type GithubDataAlias = {
  index: number
  quantity: string
  metadata: string
}

export const GITHUB_DATA: GithubDataAlias[] = [
  { index: 0, quantity: '1', metadata: 'Weekly visits ' },
  { index: 1, quantity: '1', metadata: 'Stars on GitHub' },
  { index: 2, quantity: '1', metadata: 'Contributor' },
  { index: 3, quantity: '99', metadata: 'Followers on Twitter' },
]

type BaseUrlDataAlias = {
  index: string
  base: string
}

export const BaseUrlData: BaseUrlDataAlias[] = [
  { index: '', base: '' },
  { index: 'randomDataApi', base: 'https://random-data-api.com/api/' },
  { index: 'jsonPlaceholderApi', base: 'https://jsonplaceholder.typicode.com/' },
]

type RandomDataAlias = {
  index: number
  name: string
  url: string
}

export const RandomData: RandomDataAlias[] = [
  { index: 0, name: '', url: '' },
  { index: 1, name: 'Address', url: 'address/random_address' },
  { index: 2, name: 'Appliance', url: 'appliance/random_appliance' },
  { index: 3, name: 'App', url: 'app/random_app' },
  { index: 4, name: 'Bank', url: 'bank/random_bank' },
  { index: 5, name: 'Beer', url: 'beer/random_beer' },
  { index: 6, name: 'Blood', url: 'blood/random_blood' },
  { index: 7, name: 'Business Credit Card', url: 'business_credit_card/random_card' },
  { index: 8, name: 'Cannabis', url: 'cannabis/random_cannabis' },
  { index: 9, name: 'Code', url: 'code/random_code' },
  { index: 10, name: 'Coffee', url: 'coffee/random_coffee' },
  { index: 11, name: 'Commerce', url: 'commerce/random_commerce' },
  { index: 12, name: 'Company', url: 'company/random_company' },
  { index: 13, name: 'Computer', url: 'computer/random_computer' },
  { index: 14, name: 'Crypto', url: 'crypto/random_crypto' },
  { index: 15, name: 'CryptoCoin', url: 'crypto_coin/random_crypto_coin' },
  { index: 16, name: 'Color', url: 'color/random_color' },
  { index: 17, name: 'Dessert', url: 'dessert/random_dessert' },
  { index: 18, name: 'Device', url: 'device/random_device' },
  { index: 19, name: 'Food', url: 'food/random_food' },
  { index: 20, name: 'Name', url: 'name/random_name' },
  { index: 21, name: 'Hipster', url: 'hipster/random_hipster_stuff' },
  { index: 22, name: 'Invoice', url: 'invoice/random_invoice' },
  { index: 23, name: 'Users', url: 'users/random_user' },
  { index: 24, name: 'Stripe', url: 'stripe/random_stripe' },
  { index: 25, name: 'Subscrpiption', url: 'subscription/random_subscription' },
  { index: 26, name: 'Vehicle', url: 'vehicle/random_vehicle' },
  { index: 27, name: 'ID Number ', url: 'id_number/random_id_number' },
  { index: 28, name: 'Internet Stuff', url: 'internet_stuff/random_internet_stuff' },
  { index: 29, name: 'Lorem Ipsum ', url: 'lorem_ipsum/random_lorem_ipsum' },
  { index: 30, name: 'Lorem Flickr ', url: 'lorem_flickr/random_lorem_flickr' },
  { index: 31, name: 'Lorem Pixel ', url: 'lorem_pixel/random_lorem_pixel' },
  { index: 32, name: 'Nation', url: 'nation/random_nation' },
  { index: 33, name: 'Number', url: 'number/random_number' },
  { index: 34, name: 'Phone Number ', url: 'phone_number/random_phone_number' },
  { index: 35, name: 'Placeholdit', url: 'placeholdit/random_placeholdit' },
  { index: 36, name: 'Restaurant', url: 'restaurant/random_restaurant' },
]

type JsonPlaceholderDataAlias = {
  index: number
  name: string
  url: string
}

export const JsonPlaceholderData: JsonPlaceholderDataAlias[] = [
  { index: 0, name: '', url: '' },
  { index: 1, name: 'Posts', url: 'posts/' },
  { index: 2, name: 'Comments', url: 'comments/' },
  { index: 3, name: 'Albums', url: 'albums/' },
  { index: 4, name: 'Photos', url: 'photos/' },
  { index: 5, name: 'Todos', url: 'todos/' },
  { index: 5, name: 'Users', url: 'users/' },
]

type VolumeSelectorAlias = {
  index: number
  name: string
  value: string
}

export const VolumeSelector: VolumeSelectorAlias[] = [
  { index: 0, name: 'one', value: '1' },
  { index: 1, name: 'two', value: '2' },
  { index: 2, name: 'five', value: '5' },
  { index: 3, name: 'ten', value: '10' },
]
