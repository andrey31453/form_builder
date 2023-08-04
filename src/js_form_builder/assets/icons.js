//
// consts
//

const MessageSquareIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"	stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`
const MessageCircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-message-circle'><path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'></path></svg>`
const XIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"	stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
const XCircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x-circle'><circle cx='12' cy='12' r='10'></circle><line x1='15' y1='9' x2='9' y2='15'></line><line x1='9' y1='9' x2='15' y2='15'></line></svg>`
const XOctagonIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x-octagon'><polygon points='7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2'></polygon><line x1='15' y1='9' x2='9' y2='15'></line><line x1='9' y1='9' x2='15' y2='15'></line></svg>`
const XSquareIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x-square'><rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect><line x1='9' y1='9' x2='15' y2='15'></line><line x1='15' y1='9' x2='9' y2='15'></line></svg>`
const ActivityIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-activity'><polyline points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline></svg>`
const AlertCircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-alert-circle'><circle cx='12' cy='12' r='10'></circle><line x1='12' y1='8' x2='12' y2='12'></line><line x1='12' y1='16' x2='12.01' y2='16'></line></svg>`
const AlignCenterIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-align-center'><line x1='18' y1='10' x2='6' y2='10'></line><line x1='21' y1='6' x2='3' y2='6'></line><line x1='21' y1='14' x2='3' y2='14'></line><line x1='18' y1='18' x2='6' y2='18'></line></svg>`
const AlignJustifyIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-align-justify'><line x1='21' y1='10' x2='3' y2='10'></line><line x1='21' y1='6' x2='3' y2='6'></line><line x1='21' y1='14' x2='3' y2='14'></line><line x1='21' y1='18' x2='3' y2='18'></line></svg>`
const ArrowDownCircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-down-circle'><circle cx='12' cy='12' r='10'></circle><polyline points='8 12 12 16 16 12'></polyline><line x1='12' y1='8' x2='12' y2='16'></line></svg>`
const ArrowLeftCircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-left-circle'><circle cx='12' cy='12' r='10'></circle><polyline points='12 8 8 12 12 16'></polyline><line x1='16' y1='12' x2='8' y2='12'></line></svg>`
const ArrowRightCircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-right-circle'><circle cx='12' cy='12' r='10'></circle><polyline points='12 16 16 12 12 8'></polyline><line x1='8' y1='12' x2='16' y2='12'></line></svg>`
const ArrowUpCircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-up-circle'><circle cx='12' cy='12' r='10'></circle><polyline points='16 12 12 8 8 12'></polyline><line x1='12' y1='16' x2='12' y2='8'></line></svg>`
const ArrowDownIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-down'><line x1='12' y1='5' x2='12' y2='19'></line><polyline points='19 12 12 19 5 12'></polyline></svg>`
const ArrowLeftIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-left'><line x1='19' y1='12' x2='5' y2='12'></line><polyline points='12 19 5 12 12 5'></polyline></svg>`
const ArrowRightIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-right'><line x1='5' y1='12' x2='19' y2='12'></line><polyline points='12 5 19 12 12 19'></polyline></svg>`
const ArrowUpIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-up'><line x1='12' y1='19' x2='12' y2='5'></line><polyline points='5 12 12 5 19 12'></polyline></svg>`
const BarChart2Icon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-bar-chart-2'><line x1='18' y1='20' x2='18' y2='10'></line><line x1='12' y1='20' x2='12' y2='4'></line><line x1='6' y1='20' x2='6' y2='14'></line></svg>`
const BellIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-bell'><path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path><path d='M13.73 21a2 2 0 0 1-3.46 0'></path></svg>`
const CastIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-cast'><path d='M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6'></path><line x1='2' y1='20' x2='2.01' y2='20'></line></svg>`
const CheckCircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check-circle'><path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path><polyline points='22 4 12 14.01 9 11.01'></polyline></svg>`
const CheckSquareIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check-square'><polyline points='9 11 12 14 22 4'></polyline><path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'></path></svg>`
const CheckIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'><polyline points='20 6 9 17 4 12'></polyline></svg>`
const ChevronDownIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'><polyline points='6 9 12 15 18 9'></polyline></svg>`
const ChevronLeftIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'><polyline points='15 18 9 12 15 6'></polyline></svg>`
const ChevronRightIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'><polyline points='9 18 15 12 9 6'></polyline></svg>`
const ChevronUpIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-up'><polyline points='18 15 12 9 6 15'></polyline></svg>`
const CircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-circle'><circle cx='12' cy='12' r='10'></circle></svg>`
const CloudIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-cloud'><path d='M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'></path></svg>`
const CodeIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-code'><polyline points='16 18 22 12 16 6'></polyline><polyline points='8 6 2 12 8 18'></polyline></svg>`
const CopyIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-copy'><rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect><path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path></svg>`
const Edit2Icon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-edit-2'><path d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'></path></svg>`
const Edit3Icon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-edit-3'><path d='M12 20h9'></path><path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'></path></svg>`
const EditIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-edit'><path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path><path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path></svg>`
const ExternalLinkIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-external-link'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg>`
const FeatherIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-feather'><path d='M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z'></path><line x1='16' y1='8' x2='2' y2='22'></line><line x1='17.5' y1='15' x2='9' y2='15'></line></svg>`
const InfoIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-info'><circle cx='12' cy='12' r='10'></circle><line x1='12' y1='16' x2='12' y2='12'></line><line x1='12' y1='8' x2='12.01' y2='8'></line></svg>`
const LayersIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-layers'><polygon points='12 2 2 7 12 12 22 7 12 2'></polygon><polyline points='2 17 12 22 22 17'></polyline><polyline points='2 12 12 17 22 12'></polyline></svg>`
const ListIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-list'><line x1='8' y1='6' x2='21' y2='6'></line><line x1='8' y1='12' x2='21' y2='12'></line><line x1='8' y1='18' x2='21' y2='18'></line><line x1='3' y1='6' x2='3.01' y2='6'></line><line x1='3' y1='12' x2='3.01' y2='12'></line><line x1='3' y1='18' x2='3.01' y2='18'></line></svg>`
const LoaderIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-loader'><line x1='12' y1='2' x2='12' y2='6'></line><line x1='12' y1='18' x2='12' y2='22'></line><line x1='4.93' y1='4.93' x2='7.76' y2='7.76'></line><line x1='16.24' y1='16.24' x2='19.07' y2='19.07'></line><line x1='2' y1='12' x2='6' y2='12'></line><line x1='18' y1='12' x2='22' y2='12'></line><line x1='4.93' y1='19.07' x2='7.76' y2='16.24'></line><line x1='16.24' y1='7.76' x2='19.07' y2='4.93'></line></svg>`
const LogInIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-log-in'><path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'></path><polyline points='10 17 15 12 10 7'></polyline><line x1='15' y1='12' x2='3' y2='12'></line></svg>`
const LogOutIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-log-out'><path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path><polyline points='16 17 21 12 16 7'></polyline><line x1='21' y1='12' x2='9' y2='12'></line></svg>`
const MailIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-mail'><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path><polyline points='22,6 12,13 2,6'></polyline></svg>`
const Maximize2Icon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-maximize-2'><polyline points='15 3 21 3 21 9'></polyline><polyline points='9 21 3 21 3 15'></polyline><line x1='21' y1='3' x2='14' y2='10'></line><line x1='3' y1='21' x2='10' y2='14'></line></svg>`
const MenuIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-menu'><line x1='3' y1='12' x2='21' y2='12'></line><line x1='3' y1='6' x2='21' y2='6'></line><line x1='3' y1='18' x2='21' y2='18'></line></svg>`
const Minimize2Icon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minimize-2'><polyline points='4 14 10 14 10 20'></polyline><polyline points='20 10 14 10 14 4'></polyline><line x1='14' y1='10' x2='21' y2='3'></line><line x1='3' y1='21' x2='10' y2='14'></line></svg>`
const MinusCircleIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minus-circle'><circle cx='12' cy='12' r='10'></circle><line x1='8' y1='12' x2='16' y2='12'></line></svg>`
const MinusSquareIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minus-square'><rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect><line x1='8' y1='12' x2='16' y2='12'></line></svg>`
const MinusIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minus'><line x1='5' y1='12' x2='19' y2='12'></line></svg>`
const MoreHorizontalIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-more-horizontal'><circle cx='12' cy='12' r='1'></circle><circle cx='19' cy='12' r='1'></circle><circle cx='5' cy='12' r='1'></circle></svg>`
const MoreVerticalIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-more-vertical'><circle cx='12' cy='12' r='1'></circle><circle cx='12' cy='5' r='1'></circle><circle cx='12' cy='19' r='1'></circle></svg>`
const PlusIcon = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-plus'><line x1='12' y1='5' x2='12' y2='19'></line><line x1='5' y1='12' x2='19' y2='12'></line></svg>`

//
// export
//

export default {
  MessageSquareIcon,
  MessageCircleIcon,
  XIcon,
  XCircleIcon,
  XOctagonIcon,
  XSquareIcon,
  ActivityIcon,
  AlertCircleIcon,
  AlignCenterIcon,
  AlignJustifyIcon,
  ArrowDownCircleIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ArrowUpCircleIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BarChart2Icon,
  BellIcon,
  CastIcon,
  CheckCircleIcon,
  CheckSquareIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
  CloudIcon,
  CodeIcon,
  CopyIcon,
  Edit2Icon,
  Edit3Icon,
  EditIcon,
  ExternalLinkIcon,
  FeatherIcon,
  InfoIcon,
  LayersIcon,
  ListIcon,
  LoaderIcon,
  LogInIcon,
  LogOutIcon,
  MailIcon,
  Maximize2Icon,
  MenuIcon,
  Minimize2Icon,
  MinusCircleIcon,
  MinusSquareIcon,
  MinusIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  PlusIcon,
}
