import OlorinExample from '@olorin/core/OlorinExample';
import OlorinHighlight from '@olorin/core/OlorinHighlight';
import OlorinSvgIcon from '@olorin/core/OlorinSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DocumentationPageBreadcrumb from '../../DocumentationPageBreadcrumb';
import BasicModalComponent from '../components/modal/BasicModal';
import BasicModalRaw from '../components/modal/BasicModal.tsx?raw';
import NestedModalComponent from '../components/modal/NestedModal';
import NestedModalRaw from '../components/modal/NestedModal.tsx?raw';
import TransitionsModalComponent from '../components/modal/TransitionsModal';
import TransitionsModalRaw from '../components/modal/TransitionsModal.tsx?raw';
import SpringModalComponent from '../components/modal/SpringModal';
import SpringModalRaw from '../components/modal/SpringModal.tsx?raw';
import KeepMountedModalComponent from '../components/modal/KeepMountedModal';
import KeepMountedModalRaw from '../components/modal/KeepMountedModal.tsx?raw';
import ServerModalComponent from '../components/modal/ServerModal';
import ServerModalRaw from '../components/modal/ServerModal.tsx?raw';

function ModalDoc(props) {
	return (
		<>
			<div className="flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between">
				<DocumentationPageBreadcrumb />
				<Button
					className="normal-case"
					variant="contained"
					color="secondary"
					component="a"
					href="https://mui.com/components/modal"
					target="_blank"
					role="button"
					size="small"
					startIcon={<OlorinSvgIcon size={20}>heroicons-outline:external-link</OlorinSvgIcon>}
				>
					Reference
				</Button>
			</div>
			<Typography
				className="text-32 my-16 font-700"
				component="h1"
			>
				Modal
			</Typography>
			<Typography className="description">
				The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever
				else.
			</Typography>

			<Typography
				className="text-14 mb-32"
				component="div"
			>
				The component renders its <code>children</code> node in front of a backdrop component. The{' '}
				<code>Modal</code> offers important features:
			</Typography>
			<ul className="space-y-16">
				<li>💄 Manages modal stacking when one-at-a-time just isn&#39;t enough.</li>
				<li>🔐 Creates a backdrop, for disabling interaction below the modal.</li>
				<li>🔐 It disables scrolling of the page content while open.</li>
				<li>
					♿️ It properly manages focus; moving to the modal content, and keeping it there until the modal is
					closed.
				</li>
				<li>♿️ Adds the appropriate ARIA roles automatically.</li>
			</ul>
			<div className="border-1 p-16 rounded-16 my-12">
				<Typography
					className="text-14 mb-32"
					component="div"
				>
					The term &quot;modal&quot; is sometimes used to mean &quot;dialog&quot;, but this is a misnomer. A
					modal window describes parts of a UI. An element is considered modal if{' '}
					<a href="https://en.wikipedia.org/wiki/Modal_window">
						it blocks interaction with the rest of the application
					</a>
					.
				</Typography>
			</div>

			<Typography
				className="text-14 mb-32"
				component="div"
			>
				If you are creating a modal dialog, you probably want to use the{' '}
				<a href="/material-ui/react-dialog/">Dialog</a> component rather than directly using Modal. Modal is a
				lower-level construct that is leveraged by the following components:
			</Typography>
			<ul className="space-y-16">
				<li>
					<a href="/material-ui/react-dialog/">Dialog</a>
				</li>
				<li>
					<a href="/material-ui/react-drawer/">Drawer</a>
				</li>
				<li>
					<a href="/material-ui/react-menu/">Menu</a>
				</li>
				<li>
					<a href="/material-ui/react-popover/">Popover</a>
				</li>
			</ul>
			<Typography
				className="text-24 mt-24 mb-10 font-700"
				component="h2"
			>
				Basic modal
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				<OlorinExample
					name="BasicModal.js"
					className="my-16"
					iframe={false}
					component={BasicModalComponent}
					raw={BasicModalRaw}
				/>
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				Notice that you can disable the outline (often blue or gold) with the <code>outline: 0</code> CSS
				property.
			</Typography>
			<Typography
				className="text-24 mt-24 mb-10 font-700"
				component="h2"
			>
				Nested modal
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				Modals can be nested, for example a select within a dialog, but stacking of more than two modals, or any
				two modals with a backdrop is discouraged.
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				<OlorinExample
					name="NestedModal.js"
					className="my-16"
					iframe={false}
					component={NestedModalComponent}
					raw={NestedModalRaw}
				/>
			</Typography>
			<Typography
				className="text-24 mt-24 mb-10 font-700"
				component="h2"
			>
				Transitions
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				The open/close state of the modal can be animated with a transition component. This component should
				respect the following conditions:
			</Typography>
			<ul className="space-y-16">
				<li>Be a direct child descendent of the modal.</li>
				<li>
					Have an <code>in</code> prop. This corresponds to the open/close state.
				</li>
				<li>
					Call the <code>onEnter</code> callback prop when the enter transition starts.
				</li>
				<li>
					Call the <code>onExited</code> callback prop when the exit transition is completed. These two
					callbacks allow the modal to unmount the child content when closed and fully transitioned.
				</li>
			</ul>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				Modal has built-in support for{' '}
				<a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				<OlorinExample
					name="TransitionsModal.js"
					className="my-16"
					iframe={false}
					component={TransitionsModalComponent}
					raw={TransitionsModalRaw}
				/>
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				Alternatively, you can use <a href="https://github.com/pmndrs/react-spring">react-spring</a>.
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				<OlorinExample
					name="SpringModal.js"
					className="my-16"
					iframe={false}
					component={SpringModalComponent}
					raw={SpringModalRaw}
				/>
			</Typography>
			<Typography
				className="text-24 mt-24 mb-10 font-700"
				component="h2"
			>
				Performance
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				The content of modal is unmounted when closed. If you need to make the content available to search
				engines or render expensive component trees inside your modal while optimizing for interaction
				responsiveness it might be a good idea to change this default behavior by enabling the{' '}
				<code>keepMounted</code> prop:
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-jsx"
			>
				{` 
<Modal keepMounted />
`}
			</OlorinHighlight>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				<OlorinExample
					name="KeepMountedModal.js"
					className="my-16"
					iframe={false}
					component={KeepMountedModalComponent}
					raw={KeepMountedModalRaw}
				/>
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				As with any performance optimization, this is not a silver bullet. Be sure to identify bottlenecks
				first, and then try out these optimization strategies.
			</Typography>
			<Typography
				className="text-24 mt-24 mb-10 font-700"
				component="h2"
			>
				Server-side modal
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				React <a href="https://github.com/facebook/react/issues/13097">doesn&#39;t support</a> the{' '}
				<a href="https://react.dev/reference/react-dom/createPortal">
					<code>createPortal()</code>
				</a>{' '}
				API on the server. In order to display the modal, you need to disable the portal feature with the{' '}
				<code>disablePortal</code> prop:
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				<OlorinExample
					name="ServerModal.js"
					className="my-16"
					iframe={false}
					component={ServerModalComponent}
					raw={ServerModalRaw}
				/>
			</Typography>
			<Typography
				className="text-24 mt-24 mb-10 font-700"
				component="h2"
			>
				Limitations
			</Typography>
			<Typography
				className="text-16 mt-20 mb-10 font-700"
				component="h3"
			>
				Focus trap
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				The modal moves the focus back to the body of the component if the focus tries to escape it.
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				This is done for accessibility purposes. However, it might create issues. In the event the users need to
				interact with another part of the page, for example with a chatbot window, you can disable the behavior:
			</Typography>

			<OlorinHighlight
				component="pre"
				className="language-jsx"
			>
				{` 
<Modal disableEnforceFocus />
`}
			</OlorinHighlight>
			<Typography
				className="text-24 mt-24 mb-10 font-700"
				component="h2"
			>
				Accessibility
			</Typography>
			<Typography
				className="text-14 mb-32"
				component="div"
			>
				(WAI-ARIA:{' '}
				<a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">
					https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
				</a>
				)
			</Typography>
			<ul className="space-y-16">
				<li>
					<Typography
						className="text-14 mb-32"
						component="div"
					>
						Be sure to add <code>{`aria-labelledby="id..."`}</code>, referencing the modal title, to the{' '}
						<code>Modal</code>. Additionally, you may give a description of your modal with the{' '}
						<code>{`aria-describedby="id..."`}</code> prop on the <code>Modal</code>.
					</Typography>

					<OlorinHighlight
						component="pre"
						className="language-jsx"
					>
						{` 
<Modal aria-labelledby="modal-title" aria-describedby="modal-description">
  <h2 id="modal-title">My Title</h2>
  <Typography id="modal-description">My Description</Typography>
</Modal>
`}
					</OlorinHighlight>
				</li>
				<li>
					<Typography
						className="text-14 mb-32"
						component="div"
					>
						The{' '}
						<a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/">
							WAI-ARIA Authoring Practices
						</a>{' '}
						can help you set the initial focus on the most relevant element, based on your modal content.
					</Typography>
				</li>
				<li>
					<Typography
						className="text-14 mb-32"
						component="div"
					>
						Keep in mind that a &quot;modal window&quot; overlays on either the primary window or another
						modal window. Windows under a modal are <strong>inert</strong>. That is, users cannot interact
						with content outside an active modal window. This might create{' '}
						<a href="#focus-trap">conflicting behaviors</a>.
					</Typography>
				</li>
			</ul>
		</>
	);
}

export default ModalDoc;
