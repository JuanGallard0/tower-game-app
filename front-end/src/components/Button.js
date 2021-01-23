import styled from "styled-components";

const ButtonPrimary = styled.button`
    border: none;
    background-color: #ffb92c;
    width: 150px;
    border-radius: 15px;
    font-size: 1.5rem;
    color: var(--color-primary);

    &:hover {
        background-color: var(--color-primary-light);
        color: white;
    }
`;

export { ButtonPrimary };
