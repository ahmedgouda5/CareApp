import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import ButtonGenrateAi from "./ButtonGenrateAi";

export default function Chat() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <ButtonGenrateAi />
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[95vw] max-w-2xl overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50 p-0 shadow-[0_20px_70px_-20px_rgba(15,23,42,0.45)] dark:border-slate-700/80 dark:from-slate-900 dark:to-slate-950">
        <AlertDialogHeader className="relative border-b border-slate-200/80 bg-white/80 px-4 py-4 backdrop-blur sm:px-6 dark:border-slate-700/70 dark:bg-slate-900/80">
          <AlertDialogCancel className="absolute right-4 top-4 h-9 rounded-full border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:right-6">
            Close
          </AlertDialogCancel>
          <AlertDialogTitle className="flex items-center gap-2 pr-16 text-left text-base font-semibold tracking-tight text-slate-900 sm:text-lg dark:text-slate-100">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.2)]" />
            Care AI Assistant
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-1 pr-16 text-left text-xs text-slate-500 sm:text-sm dark:text-slate-400">
            Ask anything about care plans, medications, or follow-ups.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="max-h-[55vh] space-y-4 overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_45%),linear-gradient(to_bottom,#f8fafc,#f1f5f9)] px-4 py-5 sm:px-6 dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_45%),linear-gradient(to_bottom,#020617,#0f172a)]">
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-slate-200/60 bg-white/90 px-4 py-2.5 text-sm text-slate-800 shadow-md shadow-slate-300/30 dark:border-slate-700/80 dark:bg-slate-800/90 dark:text-slate-100 sm:max-w-[75%]">
              Hello, I am your AI assistant. How can I help you today?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-br from-blue-600 to-indigo-600 px-4 py-2.5 text-sm text-white shadow-md shadow-blue-500/40 sm:max-w-[75%]">
              Can you summarize the patient&apos;s weekly care tasks?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-slate-200/60 bg-white/90 px-4 py-2.5 text-sm text-slate-800 shadow-md shadow-slate-300/30 dark:border-slate-700/80 dark:bg-slate-800/90 dark:text-slate-100 sm:max-w-[75%]">
              Sure. This week includes medication checks, hydration tracking,
              and one physiotherapy follow-up.
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200/80 bg-white/90 p-3 backdrop-blur sm:p-4 dark:border-slate-700/70 dark:bg-slate-900/90">
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-inner dark:border-slate-700 dark:bg-slate-900">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-transparent px-2 py-1 text-sm text-slate-900 placeholder:text-slate-400 outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
            />
            <AlertDialogAction className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/40 transition hover:from-blue-700 hover:to-indigo-700 sm:px-4 sm:text-sm">
              Send
            </AlertDialogAction>
          </div>
        </div>
        <AlertDialogFooter className="hidden" />
      </AlertDialogContent>
    </AlertDialog>
  );
}
