import { Button } from '@workspace/ui/components/button'
import electronLogo from './assets/electron.svg'
import Versions from './components/Versions'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <img
        alt="logo"
        className="mb-5 h-32 w-32 transition-all duration-300 hover:drop-shadow-[0_0_1.2em_#6988e6aa]"
        src={electronLogo}
      />
      <div className="text-sm mb-2.5">Powered by electron-vite</div>
      <div className="text-2xl leading-8 text-center mx-2.5 py-4">
        Build Desktop app with <span className="font-bold">React</span>,{' '}
        <span className="font-bold">TypeScript</span>, <span className="font-bold">Electron</span>{' '}
        and <span className="font-bold">shadcn/ui</span>
      </div>
      <p className="text-base leading-6 text-muted-foreground font-semibold">
        Please try pressing{' '}
        <code className="font-semibold px-[5px] py-[3px] rounded-sm bg-secondary font-mono text-[85%] text-muted-foreground">
          F12
        </code>{' '}
        to open the devTool
      </p>
      <div className="flex py-8 gap-2 flex-wrap justify-center">
        <Button variant="outline">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </Button>
        <Button>
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </Button>
      </div>
      <Versions></Versions>
    </div>
  )
}

export default App
