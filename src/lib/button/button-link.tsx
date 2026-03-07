import styled from "styled-components";
import { iconTypes } from "../icon/icon-types";
import { Icon } from "../icon";

interface IButtonLinkProps {
	appearance?: "primary" | "inverted";
	disabled?: boolean;
	iconBefore?: iconTypes;
	iconAfter?: iconTypes;
	text?: string;
}

const StyledButtonLink = styled.button<IButtonLinkProps>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: ${(props) => props.theme.spacing.inner.close};
	cursor: pointer;
	padding: unset;
	font-family: ${(props) => props.theme.typography.fontFamily.text};
	font-weight: ${(props) => props.theme.typography.fontWeight.medium};
	line-height: ${(props) => props.theme.typography.lineHeight.component.base};
	font-size: ${(props) => props.theme.typography.fontSize.component.base};
	&:focus {
		box-shadow: ${(props) => props.theme.focus};
	}
	border: 1px solid ${(props) => props.theme.colors.transpatent};
	background: unset;

	${(props) =>
		props.appearance === "primary" &&
		`
        background: ${props.theme.colors.transpatent};
        &:enabled {
            color: ${props.theme.colors.link.loud.enabled};
        }

         &:hover {
            color: ${props.theme.colors.link.loud.hover};
        }

         &:active {
            color: ${props.theme.colors.link.loud.active};
        }
    `}

	${(props) =>
		props.appearance === "inverted" &&
		`
        background: ${props.theme.colors.transpatent};
        &:enabled {
            color: ${props.theme.colors.link.inverted.enabled};
        }

         &:hover {
            color: ${props.theme.colors.link.inverted.hover};
        }

         &:active {
            color: ${props.theme.colors.link.inverted.active};
        }
    `}

    ${(props) =>
		props.disabled &&
		`
        &:disabled {
            cursor: not-allowed;
            background: ${props.theme.colors.bg.disabled};
            color: ${props.theme.colors.text.disabled};
            border-color: ${props.theme.colors.border.disabled};
        }
    `}
`;

export const ButtonLink: React.FC<IButtonLinkProps> = ({
	appearance = "primary",
	disabled,
	iconAfter,
	iconBefore,
	text = "Я кнопка",
}) => {
	return (
		<StyledButtonLink appearance={appearance} disabled={disabled}>
			{iconBefore ? <Icon iconName={iconBefore} size={20} /> : null}
			{text}
			{iconAfter ? <Icon iconName={iconAfter} size={20} /> : null}
		</StyledButtonLink>
	);
};
