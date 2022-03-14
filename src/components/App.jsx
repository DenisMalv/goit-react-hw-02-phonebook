import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { Friendlist } from './Friendlist/Friendlist'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import user from './Profile/user.json'
import data from './Statistics/data'
import friends from './Friendlist/friends'
import transactions from './TransactionHistory/transactions'

export const App = () => {
  return (
    <main>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={ data }/>
      <Statistics stats={data} />
      <Friendlist friends={friends}/>
      <TransactionHistory items={transactions}/>
    </main>
  )
};
