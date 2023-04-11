import React from 'react';
import Banner from './Banner';

const Blog = () => {
	return (
		<div>
			<Banner>Blog</Banner>
			<div className='my-container my-14 border-2 border-primary rounded-lg p-4 md:px-20 md:py-10'>
				<div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							1. When should you use context API?
						</h3>
						<div className='text-base md:text-lg font-normal '>
							<strong className='active'>Answer:</strong>
							<p>
								We use Context API only when we need to share data between many
								components, and if these components are divided into many nested
								components.
							</p>
						</div>
					</div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							2. What is a custom hook?
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								A custom hook is a special JavaScript function whose name starts
								with 'use' and can be used to call other hooks. Hooks are
								reusable functions. When you have component logic that needs to
								be used by multiple components, we can extract that logic to a
								custom Hook. Example: useFetch.
							</p>
						</div>
					</div>
					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							3. What is useRef?
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								useRef is a built-in React hook that accepts one argument as the
								initial value and returns a reference. A reference is an object
								having a special property current. It can be used to store a
								mutable value that does not cause a re-render when updated.
								Syntax:
								<code>const ref = useRef(initialValue)</code>
							</p>
						</div>
					</div>

					<div className='my-4'>
						<h3 className='text-xl md:text-2xl font-semibold'>
							4. What is useMemo?
						</h3>
						<div className='text-base md:text-lg font-normal'>
							<strong className='active'>Answer:</strong>
							<p>
								useMemo is a built-in React hook that lets you cache the result
								of a calculation between re-renders. This useMemo Hook returns a
								memoized value. Think of memoization as caching a value so that
								it does not need to be recalculated. The useMemo Hook only runs
								when one of its dependencies update. This can improve
								performance. Syntex:
								<code>
									const cachedValue = useMemo(calculateValue, dependencies)
								</code>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
