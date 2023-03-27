import { ReactElement } from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import Index from '../pages';

export const shallowRender = (component: ReactElement) => {
  const renderer = createRenderer();
  renderer.render(component);

  const result = renderer.getRenderOutput();

  return { result };
};

describe('Index', () => {
  it('should render correctly', () => {
    const { result } = shallowRender(<Index />);
    expect(result).toMatchSnapshot();
  });
});
