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
