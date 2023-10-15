import './TwitterFollowCard.css'
import { TwitterfollowCard } from './TwitterFollowCard'

export function App () {
    const users = [
      {
        username: 'usuario123',
        name: 'John Doe',
        isFollowing: true
      },
      {
        username: 'user456',
        name: 'Jane Smith',
        isFollowing: false
      },
      {
        username: 'user789',
        name: 'Alice Johnson',
        isFollowing: true
      },
      {
        username: 'carlosleiva2107',
        name: 'Carlos Leiva',
        isFollowing: false
      }
    ];

    return (

        <section className='tw-usersCard'>
          {
            users.map(({username, name, isFollowing}) => (
              <TwitterfollowCard
                key={username}
                userName={username}
                name={name}
                initiaIsFollowing={isFollowing}
              />
            ))
          }
        </section>

    )
}