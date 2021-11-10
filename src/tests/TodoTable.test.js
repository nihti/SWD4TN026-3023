import { render, screen } from '';
import '@testing-library/jest-dom/extend-expect';
import TodoTable from '../components/TodoTable';

test('renders todotable', () => {
    const row = [{ desc: 'Go to coffee', date: '24.01.2021' }];
    render(<TodoTable todos={row} />);
    const tablecell = screen.getByText(/go to coffee/i);
    expect(tablecell).toBeInTheDocument();
});