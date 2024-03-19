import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function MessageSettings() {
  return (
    <div className='mb-4 flex w-full justify-start space-x-22 border-b border-gypsypurp-400/40 px-12 py-4 '>
      {/* Tone  */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>Tone</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Conversational Tone</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Formal</DropdownMenuItem>
            <DropdownMenuItem>Assertive</DropdownMenuItem>
            <DropdownMenuItem>Emotional</DropdownMenuItem>
            <DropdownMenuItem>Friendly</DropdownMenuItem>
            <DropdownMenuItem>Persuasive</DropdownMenuItem>
            <DropdownMenuItem>Encouraging</DropdownMenuItem>
            <DropdownMenuItem>Concerned</DropdownMenuItem>
            <DropdownMenuItem>Sarcastic</DropdownMenuItem>
            <DropdownMenuItem>Wity</DropdownMenuItem>
            <DropdownMenuItem>Optimistic</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Style  */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>Writing Style</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Writing Style</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Persuasive</DropdownMenuItem>
            <DropdownMenuItem>Expository</DropdownMenuItem>
            <DropdownMenuItem>Technical</DropdownMenuItem>
            <DropdownMenuItem>Journalistic</DropdownMenuItem>
            <DropdownMenuItem>Analytical </DropdownMenuItem>
            <DropdownMenuItem>Academic </DropdownMenuItem>
            <DropdownMenuItem>Narrative</DropdownMenuItem>
            <DropdownMenuItem>Creative</DropdownMenuItem>
            <DropdownMenuItem>Script</DropdownMenuItem>
            <DropdownMenuItem>Copywriting</DropdownMenuItem>
            <DropdownMenuItem>Descriptive</DropdownMenuItem>
            <DropdownMenuItem>Poetic</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Output Language */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>Language</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Output Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Spanish</DropdownMenuItem>
            <DropdownMenuItem>French</DropdownMenuItem>
            <DropdownMenuItem>Arabic</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Temperature  */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>Temperature</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Temperature</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>0</DropdownMenuItem>
            <DropdownMenuItem>0.3</DropdownMenuItem>
            <DropdownMenuItem>0.5</DropdownMenuItem>
            <DropdownMenuItem>0.7</DropdownMenuItem>
            <DropdownMenuItem>0.9</DropdownMenuItem>
            <DropdownMenuItem>1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Max Tokens  */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>Max Tokens</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Max Tokens</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>500</DropdownMenuItem>
            <DropdownMenuItem>1000</DropdownMenuItem>
            <DropdownMenuItem>2000</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default MessageSettings;
