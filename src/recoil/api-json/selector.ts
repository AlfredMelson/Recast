import { selector } from 'recoil'
import { userSubmittedUrlAtom } from './atom'

export const userQuerySelector = selector({
  key: 'userQuery',
  get: async ({ get }) => {
    const userUrl = get(userSubmittedUrlAtom)
    if (userUrl === undefined) return

    const urlData = await fetch(`${userUrl}`).then(res => res.json())
    console.log({ urlData })
    //   .then(data => console.log('fetchData:', data))
  },
})

// const [userQuery, setUserQuery] = useRecoilState(userQuerySelector)
// const setUserQuery  = useSetRecoilState(userQuerySelector)
// const userQuery  = useRecoilValue(userQuerySelector)
