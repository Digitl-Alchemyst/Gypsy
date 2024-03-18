/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import {SettingsIcon} from 'lucide-react'

function Settings() {
  return (
    <div>
      <SettingsIcon size={40} className='p-2 me- rounded-full cursor-pointer bg-gypsypurp-500/70 transition-all ease-in-out duration-200 hover:bg-gypsypurp-700/60 hover:text-gypsygold-300' />
    </div>
  )
}

export default Settings