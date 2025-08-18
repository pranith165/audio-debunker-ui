import styled from 'styled-components'

export const BreadcrumbWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;

    /* MD: Medium screens (821px-1024px) */
    @media (max-width: 1024px) and (min-width: 821px) {
        margin: 18px 10px;
        padding: 0 1rem;
    }

    /* SM: Small screens (601px-820px) */
    @media (max-width: 820px) and (min-width: 601px) {
        margin: 15px 8px;
        padding: 0 0.75rem;
    }

    /* XS: Extra small screens (360px-600px) */
    @media (max-width: 600px) {
        margin: 12px 5px;
        padding: 0 0.5rem;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
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
    white-space: nowrap;
    text-align: center;

    /* MD: Medium screens (821px-1024px) */
    @media (max-width: 1024px) and (min-width: 821px) {
        font-size: 17px;
        padding: 0 18px;
    }

    /* SM: Small screens (601px-820px) */
    @media (max-width: 820px) and (min-width: 601px) {
        font-size: 16px;
        padding: 0 15px;
    }

    /* XS: Extra small screens (360px-600px) */
    @media (max-width: 600px) {
        font-size: 14px;
        padding: 0 8px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 80px;
    }
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

    /* MD: Medium screens (821px-1024px) */
    @media (max-width: 1024px) and (min-width: 821px) {
        &::after {
            width: 5rem;
            padding: 0 5px;
        }
    }

    /* SM: Small screens (601px-820px) */
    @media (max-width: 820px) and (min-width: 601px) {
        &::after {
            width: 4rem;
            padding: 0 4px;
        }
    }

    /* XS: Extra small screens (360px-600px) */
    @media (max-width: 600px) {
        &::after {
            width: 2rem;
            padding: 0 2px;
            margin-left: 4px;
        }
    }
`;

export const StageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    min-width: 0;

    /* MD: Medium screens (821px-1024px) */
    @media (max-width: 1024px) and (min-width: 821px) {
        flex-shrink: 1;
    }

    /* SM: Small screens (601px-820px) */
    @media (max-width: 820px) and (min-width: 601px) {
        flex-shrink: 1;
    }

    /* XS: Extra small screens (360px-600px) */
    @media (max-width: 600px) {
        flex-shrink: 1;
        flex: 1;
        justify-content: center;
        max-width: 33.33%;
    }
`;