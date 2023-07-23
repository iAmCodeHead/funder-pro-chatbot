import styles from '@/styles/Home.module.css';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    // <div className="mx-auto flex flex-col space-y-4">
    <div className={styles.manners}>
      <header className="container sticky top-0 z-40">
        <div className="h-16 border-b border-b-slate-200 py-4" />
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
    // </div>
  );
}
