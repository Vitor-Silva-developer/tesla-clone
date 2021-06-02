import styled from 'styled-components';
import { BurgerSVG } from './IconSVG'

export const Container = styled.div`
    position: sticky;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;
export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 20px;
    min-height: 52px;
`;
export const Logo = styled.img`
    height: 17px;
    cursor: pointer;
`;
export const Burger = styled(BurgerSVG)`
    width: 24px;
    height: 24px;
    cursor: pointer;

    padding-right: 5px;
`;

