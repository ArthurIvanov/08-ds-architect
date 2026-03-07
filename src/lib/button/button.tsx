import styled from "styled-components";
import { iconTypes } from "../icon/icon-types";
import { Icon } from "../icon";

interface IButtonProps {
	appearance?: "primary" | "secondary" | "onDark" | "onLight" | "inverted";
	size?: "small" | "base";
	disabled?: boolean;
	iconBefore?: iconTypes;
	iconAfter?: iconTypes;
	text?: string;
}

const StyledButton = styled.button<IButtonProps>`
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
        font-size: ${props.theme.typography.fontSize.component.base};
        line-height: ${props.theme.typography.lineHeight.component.base};
        height: ${props.theme.spacing.height.base};
        padding: 0 ${props.theme.spacing.padding.relaxed};
    `}

	${(props) =>
		props.size === "small" &&
		`
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        height: ${props.theme.spacing.height.small};
        padding: 0 ${props.theme.spacing.padding.default};
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
		props.appearance === "onDark" &&
		`
        background: ${props.theme.colors.transpatent};
        &:enabled {
            border-color: ${props.theme.colors.border.lead.onDark.enabled};
            color: ${props.theme.colors.link.onDark.enabled};
        }

         &:hover {
            border-color: ${props.theme.colors.border.lead.onDark.hover};
            color: ${props.theme.colors.link.onDark.hover};
        }

         &:active {
            border-color: ${props.theme.colors.border.lead.onDark.active};
            color: ${props.theme.colors.link.onDark.active};
        }
    `}

    ${(props) =>
		props.appearance === "onLight" &&
		`
        background: ${props.theme.colors.transpatent};
        &:enabled {
            border-color: ${props.theme.colors.border.lead.onLight.enabled};
            color: ${props.theme.colors.link.onLight.enabled};
        }

         &:hover {
            border-color: ${props.theme.colors.border.lead.onLight.hover};
            color: ${props.theme.colors.link.onLight.hover};
        }

         &:active {
            border-color: ${props.theme.colors.border.lead.onLight.active};
            color: ${props.theme.colors.link.onLight.active};
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

export const Button: React.FC<IButtonProps> = ({
	appearance = "primary",
	size = "base",
	disabled,
	iconAfter,
	iconBefore,
	text = "Я кнопка",
}) => {
	return (
		<StyledButton appearance={appearance} size={size} disabled={disabled}>
			{iconBefore ? (
				<Icon iconName={iconBefore} size={size === "base" ? 20 : 16} />
			) : null}
			{text}
			{iconAfter ? (
				<Icon iconName={iconAfter} size={size === "base" ? 20 : 16} />
			) : null}
		</StyledButton>
	);
};
