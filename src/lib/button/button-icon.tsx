import styled from "styled-components";
import { iconTypes } from "../icon/icon-types";
import { Icon } from "../icon";

interface IButtonIconProps {
	appearance?: "primary" | "secondary" | "inverted";
	size?: "small" | "base";
	disabled?: boolean;
	icon?: iconTypes;
}

const StyledButtonIcon = styled.button<IButtonIconProps>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: ${(props) => props.theme.spacing.inner.close};
	cursor: pointer;
	padding: unset;
	font-family: ${(props) => props.theme.typography.fontFamily.text};
	font-weight: ${(props) => props.theme.typography.fontWeight.medium};
	&:focus {
		box-shadow: ${(props) => props.theme.focus};
	}
	border: 1px solid ${(props) => props.theme.colors.transpatent};
	background: unset;

	${(props) =>
		props.size === "base" &&
		`
        height: ${props.theme.spacing.height.base};
        width: ${props.theme.spacing.height.base};
        
    `}

	${(props) =>
		props.size === "small" &&
		`
        height: ${props.theme.spacing.height.small};
        width: ${props.theme.spacing.height.small};
        
    `}

    ${(props) =>
		props.appearance === "primary" &&
		`
        color: ${props.theme.colors.text.inverted};
        &:enabled {
            background: ${props.theme.colors.bg.lead.loud.enabled};
        }

         &:hover {
            background: ${props.theme.colors.bg.lead.loud.hover};
        }

         &:active {
            background: ${props.theme.colors.bg.lead.loud.active};
        }
    `}

    ${(props) =>
		props.appearance === "secondary" &&
		`
        background: ${props.theme.colors.transpatent};
        &:enabled {
            border-color: ${props.theme.colors.border.lead.loud.enabled};
            color: ${props.theme.colors.link.loud.enabled};
        }

         &:hover {
            border-color: ${props.theme.colors.border.lead.loud.hover};
            color: ${props.theme.colors.link.loud.hover};
        }

         &:active {
            border-color: ${props.theme.colors.border.lead.loud.active};
            color: ${props.theme.colors.link.loud.active};
        }
    `}


    ${(props) =>
		props.appearance === "inverted" &&
		`
        background: ${props.theme.colors.transpatent};
        &:enabled {
            border-color: ${props.theme.colors.border.lead.inverted.enabled};
            color: ${props.theme.colors.link.inverted.enabled};
        }

         &:hover {
            border-color: ${props.theme.colors.border.lead.inverted.hover};
            color: ${props.theme.colors.link.inverted.hover};
        }

         &:active {
            border-color: ${props.theme.colors.border.lead.inverted.active};
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

export const ButtonIcon: React.FC<IButtonIconProps> = ({
	appearance = "primary",
	size = "base",
	disabled,
	icon = "user",
}) => {
	return (
		<StyledButtonIcon
			appearance={appearance}
			size={size}
			disabled={disabled}
		>
			<Icon iconName={icon} size={size === "base" ? 20 : 16} />
		</StyledButtonIcon>
	);
};
