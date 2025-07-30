import styled from 'styled-components'

export const BreadcrumbWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px;
`;

export const BreadcrumbStage = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 18px;
    font-weight: 500;
    color: ${({enable}) => (enable ? 'oklch(0.685 0.169 237.323)' : '#777777')};
    position: relative;
    padding: 0 20px;
`;


export const BreadcrumbLine = styled.div`
    &::after {
        content: '';
        width: 6rem;
        padding: 0 6px;
        height: 1px;
        background: black;
        margin-left: var(--space-md);
        display: ${({ path }) => (path ? 'block' : 'none')};
    }
`;

export const StageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;