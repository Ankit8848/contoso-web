# Test to check if the Terraform configuration for chat.tsx is valid
terraform {
    required_version = ">= 0.12"
}

provider "azurerm" {
    features {}
}

resource "azurerm_function_app" "test" {
    name                       = "test-function-app"
    location                   = azurerm_resource_group.test.location
    resource_group_name        = azurerm_resource_group.test.name
    app_service_plan_id        = azurerm_app_service_plan.test.id
    storage_account_name       = azurerm_storage_account.test.name
    storage_account_access_key = azurerm_storage_account.test.primary_access_key
    os_type                    = "linux"
    version                    = "~3"
}

resource "azurerm_resource_group" "test" {
    name     = "test-resources"
    location = "West Europe"
}

resource "azurerm_app_service_plan" "test" {
    name                = "test-app-service-plan"
    location            = azurerm_resource_group.test.location
    resource_group_name = azurerm_resource_group.test.name
    sku {
        tier = "Dynamic"
        size = "Y1"
    }
}

resource "azurerm_storage_account" "test" {
    name                     = "teststorageacct"
    resource_group_name      = azurerm_resource_group.test.name
    location                 = azurerm_resource_group.test.location
    account_tier             = "Standard"
    account_replication_type = "LRS"
}